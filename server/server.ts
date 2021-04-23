import app from "./app";

const server = app.listen(app.get("server_port"), () => {
  console.log(
    "  App is running at %s in %s mode",
    app.get("origin_uri"),
    app.get("env")
  );
  console.log("  Press CTRL-C to stop\n");
});

export default server;
