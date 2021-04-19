import sinon, { SinonSandbox, SinonStub } from "sinon";
import axios from "axios";
import chai, { expect } from "chai";
import chaiAsPromised from "chai-as-promised";
import { MatchV1 } from "../matchV1";

chai.use(chaiAsPromised);

describe("MatchV1", () => {
  let sandbox: SinonSandbox = sinon.createSandbox();

  let axiosGetStub: SinonStub;

  const axiosInstance = axios.create({ baseURL: "https://www.test.com" });
  const ranked = new MatchV1(axiosInstance);

  beforeEach(() => {
    axiosGetStub = sandbox.stub(axiosInstance, "get").resolves();
  });

  afterEach(() => sandbox.restore());

  it("should return a matchlist for games played by the puuid", async () => {
    const puuid: string = "PUUID";
    await ranked.getMatchListsByPuuid(puuid);

    expect(axiosGetStub.getCalls().length).to.equals(1);
    expect(axiosGetStub.firstCall.args[0]).to.equal(
      `/val/match/v1/matchlists/by-puuid/${puuid}`
    );
  });

  it("should return a match by id", async () => {
    const matchId: string = "MATCH_ID";
    await ranked.getMatchById(matchId);

    expect(axiosGetStub.getCalls().length).to.equals(1);
    expect(axiosGetStub.firstCall.args[0]).to.equal(
      `/val/match/v1/matches/${matchId}`
    );
  });

  it("should return list of recent matches", async () => {
    const queueId: string = "QUEUE_ID";
    await ranked.getRecentMatches(queueId);

    expect(axiosGetStub.getCalls().length).to.equals(1);
    expect(axiosGetStub.firstCall.args[0]).to.equal(
      `/val/match/v1/recent-matches/by-queue/${queueId}`
    );
  });
});
