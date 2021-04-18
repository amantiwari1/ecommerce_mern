import * as productController from "../controllers/product.controller";
import { Router } from "express";
import { body, check } from "express-validator";
import { use } from "../util/TryCatch";
import passport from "passport";
import multer from "multer";
import path from "path";
import fs from "fs";
import { Request, Response } from "express";

const updateProductValidations = [
  body("title", "toast.post.title_empty").not().isEmpty(),
];

const isAuth = passport.authenticate("jwt", { session: false });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (!req.body.folder) {
      req.body.folder = Date.now();
    }

    const dir = path.join(__dirname, "..", "images", req.body.folder.toString());

    fs.exists(dir, (exist) => {
      if (!exist) {
        return fs.mkdir(dir, (error) => cb(error, dir));
      }
      return cb(null, dir);
    });
  },
  filename: (req, file, cb) => {
    cb(null, Date.now().toString() + path.extname(file.originalname) );
  },
});

const fileFilter = (
  _: Request,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback
) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    cb(null, false);
  }
  cb(null, true); 
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

const fullyUpload = upload.fields([
  {
    name: "featureImage",
    maxCount: 1,
  },
  {
    name: "ImageArray",
    maxCount: 10,
  },
]);
const product: Router = Router();

product.post(
  "/create",
  isAuth,
  fullyUpload,
  updateProductValidations,
  use(productController.create)
);

product.get("/gets", isAuth, use(productController.getProducts));
product.get("/getsCategories", use(productController.getProductCategory));
product.get("/get/:titleslug", use(productController.getProduct));
product.post("/update", isAuth, use(productController.updateProduct));
product.delete("/delete/:id", isAuth, use(productController.deleteProduct));

export default product;
