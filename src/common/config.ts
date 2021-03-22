import * as dotenv from "dotenv";
import { strict as assert } from "assert";

dotenv.config();

const {
  PORT,
  HOST,
  HOST_URL,
  FIREBASE_PROJECT_ID,
  FIREBASE_CLIENT_EMAIL,
  FIREBASE_PRIVATE_KEY,
} = process.env;

assert(PORT, "PORT is required");
assert(HOST, "HOST is required");

export default {
  port: PORT ? parseInt(PORT as string, 10) : 5000,
  host: HOST,
  url: HOST_URL,
  firebaseConfig: {
    projectId: FIREBASE_PROJECT_ID,
    clientEmail: FIREBASE_CLIENT_EMAIL,
    privateKey: (FIREBASE_PRIVATE_KEY as string).replace(/\\n/g, "\n"),
  },
};
