export interface MatchListEntry {
  matchId: string;

  gameStartTimeMillis: number;

  teamId: string;
}

export interface MatchList {
  puuid: string;

  history: MatchListEntry[];
}

export enum Queue {
  COMPETITIVE = "competitive",
  UNRATED = "unrated",
  SPIKERUSH = "spikerush",
}

export interface RecentMatches {
  currentTime: number;

  matchIds: string[];
}

export interface Match {
  matchInfo: MatchInfo[];

  players: Player[];

  teams: Team[];

  coaches: Coach[];

  roundResults: RoundResult[];
}

export interface MatchInfo {
  matchId: string;

  mapId: string;

  gameLengthMillis: number;

  gameStartMillis: number;

  provisioningFlowId: string;

  isCompleted: boolean;

  customGameName: string;

  queueId: string;

  gameMode: string;

  isRanked: boolean;

  seasonId: string;
}

export interface Player {
  puuid: string;

  gameName: string;

  tagLine: string;

  teamId: string;

  partyId: string;

  characterId: string;

  stats: PlayerStats;

  competitiveTier: number;

  playerCard: string;

  playerTitle: string;
}

export interface PlayerStats {
  score: number;

  roundsPlayed: number;

  kills: number;

  deaths: number;

  assists: number;

  playtimeMillis: number;

  abilityCasts: AbilityCasts;
}

export interface AbilityCasts {
  grenadeCasts: number;

  ability1Casts: number;

  ability2Casts: number;

  ultimateCasts: number;
}

export interface Coach {
  puuid: string;

  teamId: string;
}

export interface Team {
  teamId: string;

  won: boolean;

  roundsPlayed: number;

  roundsWon: number;

  numPoints: number;
}

export interface RoundResult {
  roundNum: number;

  roundResult: string;

  roundCeremony: string;

  winningTeam: string;

  bombPlanter: string;

  bombDefuser: string;

  plantRoundTime: number;

  plantPlayerLocations: PlayerLocations[];

  plantLocation: Location;

  plantSite: string;

  defuseRoundTime: number;

  defusePlayerLocations: PlayerLocations[];

  defuseLocation: Location;

  playerStats: PlayerRoundStats[];

  roundResultCode: string;
}

export interface Kill {
  gameTime: number;

  roundTime: number;

  killer: string;

  victim: string;

  victimLocation: Location;

  assistants: string[];

  playerLocations: PlayerLocations[];

  finishingDamage: FinishingDamage;
}

export interface Location {
  x: number;

  y: number;
}

export interface PlayerLocations {
  puuid: string;

  viewRadians: number;

  location: Location;
}

export interface FinishingDamage {
  damageType: string;

  damageItem: string;

  isSecondaryFireMode: boolean;
}

export interface Damage {
  receiver: string;

  damage: number;

  legshots: number;

  bodyshots: number;

  headshots: number;
}

export interface Economy {
  loadoutValue: number;

  weapon: string;

  armor: string;

  remaining: number;

  spent: number;
}

export interface Ability {
  grenadeEffects: string;

  ability1Effects: string;

  ability2Effects: string;

  ultimateEffects: string;
}

export interface PlayerRoundStats {
  puuid: string;

  kills: Kill[];

  damage: Damage[];

  score: number;

  economy: Economy;

  ability: Ability;
}
