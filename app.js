import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { router as userRouter } from "./api/user.js";
dotenv.config();

const PORT = process.env.SERVER_PORT;
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/user", userRouter);

app.listen(PORT, () => {
  console.log(`server is running at the port ${PORT}`);
});
