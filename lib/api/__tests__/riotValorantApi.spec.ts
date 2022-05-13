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
});
