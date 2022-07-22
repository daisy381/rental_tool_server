import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Role} from "../roles/roles.model";
import {UserRoles} from "../roles/user-roles.model";

interface UserCreationAttrs {
    email:string;
    password:string;
}

@Table({tableName:'users'})
export class User extends Model<User,UserCreationAttrs> {

    @ApiProperty({example:'1',description:"Uniq identifier"})
    @Column({type:DataType.INTEGER, unique:true, autoIncrement:true,primaryKey:true})
    id:number;

    @ApiProperty({example:'user@gmail.com',description:"Mail address"})
    @Column({type:DataType.STRING, unique:true,allowNull:false})
    email:string;

    @ApiProperty({example:'qwerty',description:"Password"})
    @Column({type:DataType.STRING, allowNull:false})
    password:string;

    @ApiProperty({example:'true',description:"Banned or not"})
    @Column({type:DataType.BOOLEAN, defaultValue:false})
    banned:boolean;

    @ApiProperty({example:'true',description:"Banned or not"})
    @Column({type:DataType.STRING, allowNull:true})
    banReason:string;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[];
}