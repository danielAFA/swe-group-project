const express = require("express");
const indexRouter = require("./routes/index");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

app
  .use(express.json())
  .use(cookieParser())
  .use(cors())
  .use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);

const port = 3001;
app.listen(port);
console.log(`express started on port ${port}`);
