import express from "express";
import router from "./router/auth-rotue.js";
import connectToMongoDB from "./utils/dbConnect.js";
import dotenv from "dotenv";
import { errorHanldle } from "./middleEares/errorMiddleware.js";
dotenv.config();

import cors from "cors";

var corsOptions = {
  origin: "http://localhost:5173",
  method: "GET, PUT,POST,DELETE,PATCH,HEAD",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204,
  credential: true,
};

const app = express();
app.use(cors(corsOptions));

app.use(express.json());
const PORT = 5000;

app.use("/api/auth", router);
app.use(errorHanldle);

// app.get("/", (req, res) => {
//   res.status(200).send("hello by backend");
// });

connectToMongoDB().then(() => {
  app.listen(PORT, (req, res) => {
    console.log(`server is running aat the port ${PORT}`);
  });
});
