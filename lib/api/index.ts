import axios, { AxiosInstance } from "axios";
import {
  errorInterceptor,
  responseInterceptor,
} from "../utils/axiosInterceptor";
import { RankedV1 } from "./valorant/ranked/rankedV1";
import { Regions } from "../types/valorant/regions";
import { StatusV1 } from "./valorant/status/statusV1";

export class RiotValorantApi {
  private readonly region: Regions;

  public rankedV1: RankedV1;
  public statusV1: StatusV1;

  constructor(apiToken: string, region: Regions) {
    if (!apiToken) {
      throw new Error("Empty api token");
    }

    if (!region) {
      throw new Error("Empty region");
    }

    this.region = region;

    const axiosInstance: AxiosInstance = axios.create({
      baseURL: `https://${this.region}.api.riotgames.com/`,
      headers: {
        "X-Riot-Token": apiToken,
      },
    });

    axiosInstance.interceptors.response.use(
      responseInterceptor,
      errorInterceptor
    );

    this.rankedV1 = new RankedV1(axiosInstance);
    this.statusV1 = new StatusV1(axiosInstance);
  }
}
