import {Router} from "express";
import {Auth} from "./auth";

export const Main = Router()

Main.use(Auth)