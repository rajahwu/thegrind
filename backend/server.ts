import express from "express";
import { getUsers } from "./data/users";

const app = express();
const port = 8000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("the daily grind");
});

app.get("/users", async (req, res) => {
    try {
        const users = await getUsers();
        if(!users) return;
        res.json({ users: users });
    } catch (err) {
        res.status(500);
    }
})

app.get("/users/:id",async (req, res) => {
    try {
        const userId = req.params.id;
        const users = await getUsers();
        if(!users) return;
        const user = users[userId] ?? null;
        if(!user) throw new Error("user not found");
        res.json( user );
    } catch (err) {
        res.status(500);
    }
})

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});

export default app;