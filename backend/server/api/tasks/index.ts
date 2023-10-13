import express from "express";
import { getTasks } from "../../../data/tasks";

const router = express.Router();

router.get("/", (req, res) => {
  const tasks = getTasks();
  res.json({ task: tasks });
});

export default router;
