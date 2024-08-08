import "reflect-metadata"
import {DataSource} from "typeorm";
import "dotenv/config"

const {POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB, POSTGRES_HOST} = process.env;

export const AppDataSource = new DataSource({
    type: "postgres",
    host: POSTGRES_HOST,
    port: 5432,
    username: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    database: POSTGRES_DB,
    entities: [__dirname + '/entity/**/*.ts'],
    migrations: [__dirname + '/migrations/**/*.ts'],
    synchronize: false,
    logging: false,
})