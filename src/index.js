import express from "express";
import dotenv from "dotenv";
import { mongoConfig } from "./config/mongo.config.js";
import { redis } from "./config/redis.config.js";
import { postgre } from "./config/postgre.config.js";
dotenv.config();
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World amr ahmed!");
});

mongoConfig();
postgre();
redis();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Example app listening on port 3000!");
});
