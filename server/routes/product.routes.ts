import * as productController from "../controllers/product.controller";
import {Router} from "express";
import {body} from "express-validator";
import {use} from "../util/TryCatch";
import Uploder from "../util/ImageFileUploader";
import passport from "passport";

const updateProductValidations = [
  body("title", "toast.post.title_empty").not().isEmpty(),
];

const isAuth = passport.authenticate("jwt", {session: false});

const product: Router = Router();

product.post(
  "/create",
  isAuth,
  Uploder,
  updateProductValidations,
  use(productController.create)
);

product.get("/gets", use(productController.getProducts));
product.get("/getsCategories", use(productController.getProductCategory));
product.get("/get/:titleslug", use(productController.getProduct));
product.post(
  "/update/:id",
  isAuth,
  Uploder,
  use(productController.updateProduct)
);
product.delete("/delete/:id", isAuth, use(productController.deleteProduct));
product.delete(
  "/deleteImage/:id/:folder/:filename",
  isAuth,
  use(productController.deleteImageProduct)
);

export default product;
