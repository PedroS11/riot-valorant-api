import { BaseApi } from "../../baseApi";
import {
  Match,
  MatchList,
  RecentMatches,
} from "../../../types/valorant/match/matchV1";

export class MatchV1 extends BaseApi {
  getMatchListsByPuuid(puuid: string): Promise<MatchList> {
    return this.axiosInstance.get(`/val/match/v1/matchlists/by-puuid/${puuid}`);
  }

  getRecentMatches(queue: string): Promise<RecentMatches> {
    return this.axiosInstance.get(
      `/val/match/v1/recent-matches/by-queue/${queue}`
    );
  }

  getMatchById(matchId: string): Promise<Match> {
    return this.axiosInstance.get(`/val/match/v1/matches/${matchId}`);
  }
}
