import express from "express";
import { DB } from "../db.js";

const router = express.Router();

const db = new DB();

router.get("/getusers", async (req, res) => {
  try {
    const response = await db.getUsers();
    res.send(response).status(200);
  } catch (err) {
    res.send("error");
  }
});

export { router };
