import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("api registration route");
});

export default router;
