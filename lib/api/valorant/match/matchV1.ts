import { BaseApi } from "../../baseApi";
import {
  Match,
  MatchList,
  Queue,
  RecentMatches,
} from "../../../types/valorant/match/matchV1";

export class MatchV1 extends BaseApi {
  async getMatchListsByPuuid(puuid: string): Promise<MatchList> {
    return this.axiosInstance.get(`/val/match/v1/matchlists/by-puuid/${puuid}`);
  }

  async getRecentMatches(queue: Queue): Promise<RecentMatches> {
    return this.axiosInstance.get(
      `/val/match/v1/recent-matches/by-queue/${queue}`
    );
  }

  async getMatchById(matchId: string): Promise<Match> {
    return this.axiosInstance.get(`/val/match/v1/matches/${matchId}`);
  }
}
