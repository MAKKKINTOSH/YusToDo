import express from "express";
import {AppDataSource} from "./db_connector";
import * as console from "node:console";
import * as process from "node:process";

const PORT = 8000;
const app = express();

AppDataSource.initialize()
    .then(() => {
        console.log("ORM was initialize")
    }).catch((err) => {
        console.error(err);
    })

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json("BACKEND RABOTAET TI NE DEBIL");
});
console.log(process.env.POSTGRES_USER)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));