import express from "express";
import authRouter from "./auth";
import tasksRouter from "./api/tasks";

import { getUsers } from "../data/users";

const app = express();
const port = 8000;

app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/tasks", tasksRouter);

app.get("/docs", (req, res) => {
  res.sendFile(__dirname + "/docs/modules.html");
});

app.get("/users", async (req, res) => {
  try {
    const users = await getUsers();
    if (!users) return;
    res.json({ users: users });
  } catch (err) {
    res.status(500);
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const userId: number = parseInt(req.params.id, 10);
    const users = await getUsers();
    if (!users) return;

    if (userId < 0 || userId >= users.length) {
      throw new Error("User not found");
    }

    const user = users[userId] ?? null;
    if (!user) throw new Error("user not found");
    res.json(user);
  } catch (err) {
    let message;
    if (err instanceof Error) message = err.message;
    else message = String(err);
    res.status(500).json({ error: message });
  }
});

app.get("/", (req, res) => {
  res.send("the daily grind");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

export default app;
