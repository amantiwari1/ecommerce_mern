import {
  HOST_URL_DEV,
  SERVER_URL_DEV,
  SERVER_PORT_URL,
  SERVER_URL_PROD,
  HOST_URL_PROD
} from "../../client/src/models/HostUrl";
import dotenv from "dotenv";
 
dotenv.config()


export const JWT_SECRET = process.env.JWT_SECRET || "secret";
export const MONGODB_URI = process.env.MONGODB_URI;

console.log(MONGODB_URI)

if (!MONGODB_URI) {
  console.error(
    "No mongo connection string. Set MONGODB_URI environment variable."
  );
  process.exit(1);
}

let url: string;
let origin: string;
const prod = process.env.NODE_ENV === 'production'
if (prod) {
  url = HOST_URL_PROD;
  origin = SERVER_URL_PROD;

} else {
  url = HOST_URL_DEV;
  origin = SERVER_URL_DEV;
}

export const HOST_URL = url;
export const SERVER_PORT = SERVER_PORT_URL;
export const SERVER_URL = origin;
