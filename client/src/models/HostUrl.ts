
// ========================
//  DEVELOPMENT
// ========================

// --- Frontend ---
export const HOST_NAME_DEV: string = "http://localhost";
export const HOST_PORT_DEV: number = 3000;
export const HOST_URL_DEV: string = `${HOST_NAME_DEV}:${HOST_PORT_DEV}`;

// --- Backend ---
export const SERVER_NAME_DEV: string = "http://localhost";
export const SERVER_PORT_DEV: number = 3001;
export const SERVER_URL_DEV = `${SERVER_NAME_DEV}:${SERVER_PORT_DEV}`;

// ========================
//  PRODUCTION
// ========================

// --- Frontend ---
export const HOST_URL_PROD: string = "https://sammee.netlify.app";

// --- Backend ---
export const SERVER_PORT_URL = process.env.PORT || SERVER_PORT_DEV;
export const SERVER_URL_PROD = "https://seemoapi.herokuapp.com"

let host_url: string;
let server_url: string;

const development: boolean = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

if (development) {
  host_url = HOST_URL_DEV;
  server_url = SERVER_URL_DEV;
} else {
  host_url = HOST_URL_PROD;
  server_url = SERVER_URL_PROD;
}


export const HOST_URL = host_url;
export const SERVER_PORT = SERVER_PORT_URL;
export const SERVER_URL = server_url;
