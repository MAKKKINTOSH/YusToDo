import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm"
import {User} from "./user";

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, (user) => user.task)
    user: User

    @Column("varchar", {
        length: 255
    })
    text: string;
    @Column()
    date: Date

    @Column()
    isCompleted: boolean
}