require("dotenv").config({ path: "./.env" });
const express = require("express");
const app = express();

//db connectivity
require("./models/db");

// logger   --- for post method
app.use(require("morgan")("tiny")); // tiny is for show short error

// cors    - api calling by frontEnd
app.use(require("cors")({ origin: true, credentials: true }));

//bodyParser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// router   - this is our base url
app.use("/api/v2", require("./routers/index"));

app.listen(
  process.env.PORT,
  console.log(`server on port : ${process.env.PORT}`)
);
