

// Change the app version value before every time you deploy your app
// This follow the approach to force refresh the SPA suggested on:
// https://stackoverflow.com/questions/34388614/how-to-force-update-single-page-application-spa-pages
export const APP_VERSION: string = "0.1.0";

// local storage keys
export const ACCESS_TOKEN_KEY: string = "accessToken"
export const INVALID_TOKEN_ERROR: string = "toast.user.invalid_token_error";

export const RESPONSE_CONTENT_TYPE = {
    JSON: "application/json",
    TEXT: "text/plain",
    HTML: "text/html"
};
