import express from "express";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
import passport from "passport";
import { MONGODB_URI, SERVER_PORT, ORIGIN_URI } from "./util/secrets";
import { Response, Request, NextFunction } from "express";
import auth from "./routes/auth.routes";
import product from "./routes/product.routes";
import isLogin from "./routes/isLogin.routes";
import cookieParser from "cookie-parser";
import passportMiddleware from './middlewares/passport'

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

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());
passport.use(passportMiddleware);

app.use(morgan("combined"));

// Server rendering configuration

app.use("/api/version", version);
app.use("/auth", auth); // version indicator
app.use("/product", product);
app.use("/islogin", isLogin);

app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
  console.log( "this is error", err);
  return res.status(500).json({ message: err.message });
});

export default app;
