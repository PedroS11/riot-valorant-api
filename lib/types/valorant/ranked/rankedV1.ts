export interface LeaderboardPlayer {
  puuid: string;

  gameName: string;

  tagLine: string;

  leaderboardRank: number;

  rankedRating: number;

  numberOfWins: number;
}

export interface Leaderboard {
  shard: string;

  actId: string;

  totalPlayers: number;

  players: LeaderboardPlayer[];
}
