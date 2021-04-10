import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import passport from "passport";
import errorHandler from "errorhandler";
import {
  MONGODB_URI,
  SERVER_PORT,
  ORIGIN_URI,
} from "./util/secrets";
import { Response, Request, NextFunction } from "express";
import auth from "./routes/auth.routes";
import product from "./routes/product.routes";

// API keys and Passport configuration
import version from "./routes/version";

// Connect to MongoDB
const mongoUrl: string = MONGODB_URI as string;
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("  MongoDB is connected successfully.");
  })
  .catch((err: any) => {
    console.error(
      "  MongoDB connection error. Please make sure MongoDB is running. " + err
    );
    process.exit();
  });

// Express configuration
const app = express();
app.set("server_port", SERVER_PORT);
app.set("origin_uri", ORIGIN_URI);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());
app.use(passport.session());
app.use(function (req: Request, res: Response, next: NextFunction) {
  console.log(
    `[${req.method} ${req.originalUrl}] is called, body is ${JSON.stringify(
      req.body
    )}`
  );
  next();
});
app.use((req: Request, res: Response, next: NextFunction) => {
  res.locals.user = req.user;
  next();
});
if (process.env.NODE_ENV === "development") {
  app.use(errorHandler());
}
app.use(cors())
// Server rendering configuration
if (process.env.NODE_ENV === "production") {
  app.use(express.static("./client/build", { maxAge: 31557600000 }));
  app.use((req: Request, res: Response, next: NextFunction) => {
    if (
      req.originalUrl.startsWith("/api") 
    
    ) {
      next();
    } else {
      const options = {
        root: "./client/build/",
        dotfiles: "deny",
        headers: {
          "x-timestamp": Date.now(),
          "x-sent": true,
        },
      };

      const fileName = "index.html";
      res.sendFile(fileName, options, function (err) {
        if (err) {
          next(err);
        } else {
          console.log("Sent:", fileName);
        }
      });
    }
  });
}

app.use("/api/version", version);
app.use("/auth", auth); // version indicator
// Add more routes like "/api/***" here
app.use("/product", product); 


export default app;