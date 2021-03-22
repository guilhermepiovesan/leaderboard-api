import firebaseAdmin from "firebase-admin";
import { BasePlayer } from "../players/player.interface";
import config from "../common/config";

const firebaseApp = firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(config.firebaseConfig),
});
export const firestore = firebaseApp.firestore();

const converter = <T>() => ({
  toFirestore: (data: Partial<T>) => data,
  fromFirestore: (snap: FirebaseFirestore.QueryDocumentSnapshot) =>
    snap.data() as T,
});

const dataPoint = <T>(collectionPath: string) =>
  firestore.collection(collectionPath).withConverter(converter<T>());

export const db = {
  players: dataPoint<BasePlayer>("players"),
};

export default db;
