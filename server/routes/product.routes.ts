import * as productController from "../controllers/product.controller";
import { Router } from "express";
import { check } from "express-validator";
import {use} from "../util/TryCatch"
import passport from "passport";

const updateProductValidations = [
  check("title", "toast.post.title_empty").not().isEmpty(),
];

const product: Router = Router();

product.post("/create", updateProductValidations, use(productController.create)  );
product.get("/gets",passport.authenticate('jwt', { session: false }) , use(productController.getProducts));
product.get("/getsCategories", use(productController.getProductCategory));
product.get("/get/:titleslug", use(productController.getProduct));

export default product; 
