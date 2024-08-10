import express, {Request, RequestHandler} from "express";
import {AppDataSource} from "./db_connector";
import * as console from "node:console";
import "dotenv/config"
import cors from "cors"
import cookieParser from "cookie-parser"
import {Main} from "./routers/main";

const PORT = process.env.PORT || 8000;
const app = express();

AppDataSource.initialize()
    .then(() => {
        console.log("ORM was initialize")
    }).catch((err) => {
        console.error(err);
    })

app.use(express.json());
app.use(cors())
app.use(cookieParser())

app.use("/api", Main);


app.get("/", (req, res) => {
    res.status(200).json("BACKEND RABOTAET TI NE DEBIL");
});

const start = async () => {
    try{
        app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
    } catch (e){
        console.log(e);
    }
}

start();