import "reflect-metadata"
import {DataSource} from "typeorm";
import {User} from "./entity/User"
import {Purpose} from "./entity/Purpose"

const {POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB} = process.env;

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "database",
    port: 5432,
    username: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    database: POSTGRES_DB,
    entities: [User, Purpose],
    synchronize: false,
    logging: false,
})