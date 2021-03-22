import express from "express";
import {
  getAllPlayers,
  getPlayer,
  addPlayer,
  editPlayer,
  deletePlayer,
} from "./players.controller";

const playersRouter = express.Router();

playersRouter.get("/", getAllPlayers);
playersRouter.get("/:id", getPlayer);
playersRouter.post("/", addPlayer);
playersRouter.put("/:id", editPlayer);
playersRouter.delete("/:id", deletePlayer);

export { playersRouter };
