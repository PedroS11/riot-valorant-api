import { Operation } from "../../operation";
import { Content } from "../../../types/valorant/status/v1/content";

export class StatusV1 extends Operation {
  getAllContent(): Promise<Content> {
    return this.axiosInstance.get("/val/content/v1/contents");
  }
}
