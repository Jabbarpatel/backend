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

router.post("/adduser", async (req, res) => {
  try {
    const { firstName, lastName } = req.body;
    await db.addUser(firstName, lastName);
    res.send({ message: "User added successfully!" }).status(200);
  } catch (err) {
    res.send({ message: "Failed add the user!" }).status(500);
  }
});

router.delete("/deleteuser/:idx", async (req, res) => {
  try {
    const idx = req.params.idx;
    await db.deleteUser(idx);
    res.send({ message: "User deleted successfully!" }).status(200);
  } catch (err) {
    res.send({ message: err.message }).status(500);
  }
});

router.post("/updateuser", async (req, res) => {
  try {
    const { idx, firstName, lastName } = req.body;
    await db.updateUser(idx, firstName, lastName);
    res.send({ message: "User updated successfully!" }).status(200);
  } catch (err) {
    res.send({ message: err.message }).status(500);
  }
});

export { router };
