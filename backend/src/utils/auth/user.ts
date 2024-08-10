import {User} from "../../entity/user"
import {AppDataSource} from "../../db_connector";
import {hash} from "bcrypt"
import * as uuid from "uuid"
import {AuthMailService} from "./mail";

export class UserManager{
    static async registration(email: string, password: string){
        const user = await AppDataSource.manager.findOneBy(User, {email: email})
        if (user){
            throw new Error("Пользователь с таким email уже существует")
        }
        const hashPassword = await hash(password, 4)

        const emailActivationLink = uuid.v4()

        await AuthMailService.sendActivationMail(email, emailActivationLink)

        const newUser = await AppDataSource.manager.create(User, {
            email: email,
            password: hashPassword
        })
    }
}