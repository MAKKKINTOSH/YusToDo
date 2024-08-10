import {User} from "./user";
import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Token{
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => User, (user) => user.token)
    user: User

    @Column({
        nullable: false,
        unique: true
    })
    refreshToken: string
}