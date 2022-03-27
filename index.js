const express = require("express");
const router = express.Router();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const route = require("./route/route.js");

app.use("/", route);

app.listen(process.env.PORT || 3000, function () {
  console.log("Express app running on port " + (process.env.PORT || 3000));
});
