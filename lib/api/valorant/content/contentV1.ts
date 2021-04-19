import { BaseApi } from "../../baseApi";
import { Content } from "../../../types/valorant/content/contentV1";
import { Locales } from "../../../types/valorant/locales";
import qs from "qs";

export class ContentV1 extends BaseApi {
  getAllContent(locale?: Locales): Promise<Content> {
    let url = "/val/content/v1/contents";

    if (locale !== undefined) {
      url += "?" + qs.stringify({ locale });
    }

    return this.axiosInstance.get(url);
  }
}
