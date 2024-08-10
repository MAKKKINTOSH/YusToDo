import { Router } from 'express';
import {UserController} from "../controllers/user";

export const Auth: Router = Router();

Auth.post("/registration");
Auth.post("/login");
Auth.post("/logout");
Auth.get("/activate/:link");
Auth.get("/refresh", UserController.refresh);