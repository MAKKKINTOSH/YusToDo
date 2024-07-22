import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany} from "typeorm"
import {Purpose} from "./Purpose";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        nullable: false,
        unique: true,
        length: 64
    })
    username: string

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

    @OneToMany(() => Purpose, (purpose) => purpose.user)
    purpose: Purpose
}
