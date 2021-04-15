import { Player } from "./player";

export interface Leaderboard {
  shard: string;
  actId: string;
  totalPlayers: number;
  players: Player[];
}
