/* eslint-disable no-console */
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");
const { join } = require("path");
const authConfig = require("./auth_config.json");

const app = express();

if (!authConfig.domain || !authConfig.audience) {
  throw "Please make sure that auth_config.json is in place and populated";
}

app.use(morgan("dev"));
// app.use(helmet());
app.use(cors());
app.use(express.static(join(__dirname, "dist")));


const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
  }),
  audience: authConfig.audience,
  issuer: `https://${authConfig.domain}/`,
  algorithm: ["RS256"]
});

app.get("/api/external", checkJwt, (req, res) => {
  res.send({
    msg: "Your access token was successfully validated!"
  });
});

app.get("/test", (req, res) => {
  res.send({
    msg: "test!"
  });
});


app.use((_, res) => {
  res.sendFile(join(__dirname, "dist", "index.html"));
});

// app.listen(3001, () => console.log("Listening on port 3001"));
module.exports = app;

