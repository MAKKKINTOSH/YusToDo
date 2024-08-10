import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany} from "typeorm"
import {Task} from "./task";
import {Token} from "./token";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        nullable: false,
        length: 128,
    })
    password: string

    @Column({
        nullable: false,
        length: 128,
        unique: true
    })
    email: string

    @CreateDateColumn()
    createdAt: Date

    // RELATIONS

    @OneToMany(() => Task, (task) => task.user)
    task: Task

    @OneToMany(() => Token, (token) => token.user)
    token: Token
}