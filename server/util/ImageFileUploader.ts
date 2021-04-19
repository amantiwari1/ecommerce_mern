import multer from "multer";
import path from "path";
import fs from "fs";
import { Request } from "express";
import { v4 as uuidv4 } from 'uuid';
import ProductCollection from "../models/Product/ProductCollection";

const storage = multer.diskStorage({
    destination:  async (req, file, cb) => {

        let updated = undefined;

        

        if (req.params.id) {
            
            updated = await ProductCollection.findById(req.params.id).exec();
        } 

          
      if (!req.body.folder) {

        if(updated) {
            req.body.folder = updated.featureImage.split('/')[0]
        } else {
            req.body.folder = Date.now()
        }
      }
  
      const dir = path.join(
        __dirname,
        "..",
        "images",
        req.body.folder.toString()
      );
  
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
      }
      return cb(null, dir);
    },
    filename: (req, file, cb) => {
      cb(null, uuidv4() + path.extname(file.originalname));
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





export default fullyUpload;