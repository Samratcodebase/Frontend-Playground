import express from "express";
import cookieParser from "cookie-parser";
import AppRouter from "./Routes/index.js";
import User from "./DB/connectDB.js";
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());
app.get("/health", (req, res) => {
  console.log("User Model", User);

  return res.json({
    message: "Its up and Running",
  });
});

app.use("/api", AppRouter);

export default app;
