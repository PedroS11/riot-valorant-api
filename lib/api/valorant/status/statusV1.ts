import { BaseApi } from "../../baseApi";
import { PlatformData } from "../../../types/valorant/status/statusV1";

export class StatusV1 extends BaseApi {
  async getPlatformData(): Promise<PlatformData> {
    return this.axiosInstance.get("/val/status/v1/platform-data");
  }
}
