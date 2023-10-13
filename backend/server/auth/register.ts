import express from "express";
const router = express.Router();
import User from "../models/user";

router.post("/", (req, res) => {
  const { username, email, password } = req.body
  const newUser = User.create({ username, email, password })
  res.json(newUser);
});

export default router;
