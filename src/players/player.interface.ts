export type PlayerId = string;

export interface BasePlayer {
  name: string;
  wins: number;
}

export interface Player extends BasePlayer {
  id: PlayerId;
}
