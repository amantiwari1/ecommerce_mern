import * as productController from "../controllers/product.controller";
import { Router } from "express";
import { check } from "express-validator";

const updateProductValidations = [
  check("title", "toast.post.title_empty").not().isEmpty(),
];

const product: Router = Router();

product.post("/create", updateProductValidations, productController.create);

export default product;
