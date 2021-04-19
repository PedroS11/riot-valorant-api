import { ContentV1, MatchV1, RankedV1, Regions, StatusV1 } from "../..";
import { RiotValorantApi } from "../riotValorantApi";
import { expect } from "chai";

describe("RiotValorantApi", () => {
  const api = new RiotValorantApi("TOKEN", Regions.EUROPE);
  it("should create one instance of each available api", () => {
    expect(api.ContentV1 instanceof ContentV1).to.be.true;
    expect(api.MatchV1 instanceof MatchV1).to.be.true;
    expect(api.StatusV1 instanceof StatusV1).to.be.true;
    expect(api.RankedV1 instanceof RankedV1).to.be.true;
  });

  it("should throw if the token is empty", () => {
    expect(() => new RiotValorantApi("", Regions.EUROPE)).to.throw(
      "Empty api token"
    );
  });

  it("should throw if the region is empty", () => {
    // @ts-ignore
    expect(() => new RiotValorantApi("TOKEN")).to.throw("Empty region");
  });

  it("should throw a custom error object if an error occurs", async () => {
    try {
      await api.ContentV1.getAllContent();
    } catch (e) {
      expect(e).to.deep.equals({
        error: "Forbidden",
        request: {
          baseUrl: "https://eu.api.riotgames.com/",
          headers: {
            Accept: "application/json, text/plain, */*",
            "User-Agent": "axios/0.21.1",
            "X-Riot-Token": "TOKEN",
          },
          method: "get",
          path: "/val/content/v1/contents",
        },
        status: 403,
      });
    }
  });
});
