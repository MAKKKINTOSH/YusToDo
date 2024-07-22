import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm"
import {User} from "./User";

@Entity()
export class Purpose {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, (user) => user.purpose)
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