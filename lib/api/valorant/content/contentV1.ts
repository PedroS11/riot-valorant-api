import { BaseApi } from "../../baseApi";
import { Content } from "../../../types/valorant/content/contentV1";

export class ContentV1 extends BaseApi {
  getAllContent(): Promise<Content> {
    return this.axiosInstance.get("/val/content/v1/contents");
  }
}
