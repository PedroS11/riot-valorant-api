import qs from "qs";
import { Leaderboard } from "../../../types/valorant/ranked/v1/leaderboard";
import { Operation } from "../../operation";

export class RankedV1 extends Operation {
  public getLeaderboardByAct(
    actId: string,
    size: number = 20,
    startIndex: number = 0
  ): Promise<Leaderboard> {
    let url = `/val/ranked/v1/leaderboards/by-act/${actId}`;
    if (size != undefined || startIndex != undefined) {
      url += "?" + qs.stringify({ size, startIndex });
    }
    return this.axiosInstance.get(url);
  }
}
