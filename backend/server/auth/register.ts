import express from "express";
const router = express.Router();
import User from "../models/user";

router.get("/", (req, res) => {
  res.send("api registration route");
});

router.post("/", async (req, res) => {
  console.log(req.body);
  const { username, email, password } = req.body;
  try {
    const newUser = await User.create({ username, email, password });
    console.log(newUser);
    res.json(newUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

export default router;
