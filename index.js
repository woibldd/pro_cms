require("dotenv").config({
  path: require("path").resolve(__dirname, "./.env.development"),
});
const staticePath = require("path").join(__dirname, "/dist");
const express = require("express");
const app = express();
app.use(express.static(staticePath));
process.setMaxListeners(0);
app.listen(process.env.TEST_NODE_PROT || 8080, function () {
  console.log(
    "Server listening for http on " +
      (process.env.TEST_NODE_PROT || 8080) +
      "dist:" +
      staticePath
  );
});
