require("dotenv").config();
import express from "express";
import * as mongoose from "mongoose";
import customerRoute from "./Routes/customerRoute";
import errorMiddleware from "./middleware/errorMiddleware";

const app = express();

const PORT = process.env.PORT || 3000;
const DB_CONNECTION = process.env.DB_CONNECTION || "";

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use("/api/customer", customerRoute);

app.use(errorMiddleware);

mongoose
  .connect(DB_CONNECTION)
  .then(() => {
    console.log("Connected to database");
    app.listen(PORT, () => {
      console.log(`Port connected: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
