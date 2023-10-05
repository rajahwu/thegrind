import express from "express";
import { getUsers } from "./data/users";

const app = express();
const port = 8000;

app.use(express.json());

app.get("/", async (req, res) => {
    const users = await getUsers();
    console.log(users);
    res.send("Hello World");
});

// app.get("/users", async (req, res) => {
//     try {
//         const users = await getUsers()
//         res.json({ uses: users })
//     } catch (err) {
//         res.status(500)
//     }
// })

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});

export default app;