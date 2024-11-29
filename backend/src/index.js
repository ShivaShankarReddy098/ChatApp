import express from "express";
import authRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import messageRoutes from "./routes/message.route.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.use(express.json()); //this can help to take user entered value
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.listen(PORT, () => {
  console.log("server is running on port:", PORT);
  connectDB();
});
