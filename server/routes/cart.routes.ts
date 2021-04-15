import { Router } from "express";
import { use } from "../util/TryCatch";
import passport from "passport";
import * as cartController from "../controllers/cart.controller";


const cart: Router = Router();

cart.get("/gets", passport.authenticate("jwt", { session: false }), cartController.read);
cart.post("/create", passport.authenticate("jwt", { session: false }), cartController.add);
cart.post("/upadte/:id", passport.authenticate("jwt", { session: false }));
cart.post("/detele/:id", passport.authenticate("jwt", { session: false }));

export default cart;
