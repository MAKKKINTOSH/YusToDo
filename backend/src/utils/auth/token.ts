import * as jwt from "jsonwebtoken"

export class TokenManager{
    static async generateJWTs(payload: string){
        const accessToken = jwt.sign(payload)
    }
}