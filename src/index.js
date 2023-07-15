const express = require("express");
const dotEnv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const commonRoutes = require("../src/routers/index");

dotEnv.config();
const app = express();
const port = process.env.PORT || 3005;

mongoose
  .connect("mongodb://127.0.0.1:27017/financialManagement")
  .then(() => console.log("Db Connected"))
  .catch((error) => {
    throw error.message;
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api", commonRoutes);
app.listen(port, () => console.log("server is running"));
