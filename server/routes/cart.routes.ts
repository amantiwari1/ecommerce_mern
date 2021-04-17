import { Router } from "express";
import { use } from "../util/TryCatch";
import passport from "passport";
import * as cartController from "../controllers/cart.controller";


const cart: Router = Router();

cart.get("/gets", passport.authenticate("jwt", { session: false }), use(cartController.read));
cart.post("/create", passport.authenticate("jwt", { session: false }), use(cartController.add));
cart.post("/upadte/:id", passport.authenticate("jwt", { session: false }));
cart.post("/delete/:id", passport.authenticate("jwt", { session: false }), use(cartController.remove));

export default cart;
