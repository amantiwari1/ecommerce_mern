import * as orderController from "../controllers/order.controllers";
import passport from "passport";
import {use} from "../util/TryCatch";
import {Router} from "express";

const isAuth = passport.authenticate("jwt", {session: false});

const order: Router = Router();

order.post("/create", isAuth, use(orderController.create));
order.get("/read", isAuth, use(orderController.read));

export default order;
