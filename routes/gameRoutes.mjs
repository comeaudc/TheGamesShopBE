import express from "express";
import auth from "../middleware/auth.mjs";
import adminAuth from "../middleware/adminAuth.mjs";
import Game from "../models/gameSchema.mjs";

const router = express.Router();

// @route: POST /api/game
// @desc: create game route
// @access: Admin
router.post("/", auth, adminAuth, async (req, res) => {
  const newGame = await Game.insertOne(req.body);

  res.json(newGame);
});

export default router;
