import express from "express";
import cors from "cors";
import helmet from "helmet";
import { playersRouter } from "./players/players.router";
import { errorHandler } from "./middleware/error.middleware";
import { notFoundHandler } from "./middleware/not-found.middleware";
import config from "./common/config";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/players", playersRouter);
app.use(errorHandler);
app.use(notFoundHandler);

app.listen(config.port, () => {
  console.log(`Listening on port ${config.port}`);
});
