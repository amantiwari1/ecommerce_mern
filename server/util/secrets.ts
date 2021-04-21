import {
  HOST_URL_DEV,
  SERVER_PORT_DEV,
  HOST_NAME_DEV,
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
let server_port: number;
let origin: string;

url = HOST_URL_DEV;
server_port = SERVER_PORT_DEV;
origin = HOST_NAME_DEV;

export const HOST_URL = url;
export const SERVER_PORT = server_port;
export const ORIGIN_URI = origin;
