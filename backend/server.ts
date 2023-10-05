import express from "express";
import { getUsers } from "./data/users";

const app = express();
const port = 8000;

// app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
});

// app.get("/users", async (req, res) => {
//     const users = await getUsers()
//     res.json({ uses: users })
// })

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});

export default app;