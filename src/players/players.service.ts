import { BasePlayer, Player } from "./player.interface";
import { PlayerId } from "./player.interface";

import db from "../db/firebase";

export const findAll = async (): Promise<Player[]> => {
  return db.players
    .orderBy("wins", "desc")
    .get()
    .then((querySnapshot) => {
      const players: Player[] = [];

      querySnapshot.forEach((doc) => {
        const { name, wins } = doc.data();
        players.push({ id: doc.id, name, wins });
      });

      return players;
    });
};

export const find = async (id: PlayerId): Promise<Player> => {
  return (await db.players.doc(id).get()).data() as Player;
};

export const create = async ({
  name,
  wins,
}: BasePlayer): Promise<FirebaseFirestore.WriteResult> => {
  return db.players.doc().create({ name, wins });
};

export const update = async (
  id: PlayerId,
  playerUpdate: BasePlayer
): Promise<FirebaseFirestore.WriteResult> => {
  return db.players.doc(id).update(playerUpdate);
};

export const remove = async (
  id: PlayerId
): Promise<FirebaseFirestore.WriteResult> => {
  return db.players.doc(id).delete();
};
