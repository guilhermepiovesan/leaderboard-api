import { Request, Response } from "express";
import * as PlayerService from "./players.service";
import { Player } from "./player.interface";

export const getAllPlayers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const players: Player[] = await PlayerService.findAll();

    res.status(200).send(players);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

export const getPlayer = async (
  { params: { id } }: Request,
  res: Response
): Promise<Response<Player> | void> => {
  try {
    const player = await PlayerService.find(id);

    if (player) {
      return res.status(200).send(player);
    }

    res.status(404).send("player not found");
  } catch (e) {
    res.status(500).send(e.message);
  }
};

export const addPlayer = async (
  { body: player }: Request,
  res: Response
): Promise<void> => {
  try {
    const newPlayer = await PlayerService.create(player);

    res.status(201).json(newPlayer);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

export const editPlayer = async (
  { body: playerUpdate, params: { id } }: Request,
  res: Response
): Promise<Response<Player> | void> => {
  try {
    const existingPlayer = await PlayerService.find(id);

    if (existingPlayer) {
      const updatedPlayer = await PlayerService.update(id, playerUpdate);
      return res.status(200).json(updatedPlayer);
    }

    const newPlayer = await PlayerService.create(playerUpdate);

    res.status(201).json(newPlayer);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

export const deletePlayer = async (
  { params: { id } }: Request,
  res: Response
): Promise<void> => {
  try {
    await PlayerService.remove(id);

    res.sendStatus(204);
  } catch (e) {
    res.status(500).send(e.message);
  }
};
