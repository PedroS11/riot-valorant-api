import sinon, { SinonSandbox, SinonStub } from "sinon";
import axios from "axios";
import chai, { expect } from "chai";
import chaiAsPromised from "chai-as-promised";
import { RankedV1 } from "../rankedV1";

chai.use(chaiAsPromised);

describe("RankedV1", () => {
  let sandbox: SinonSandbox = sinon.createSandbox();

  let axiosGetStub: SinonStub;

  const actId = "ab57ef51-4e59-da91-cc8d-51a5a2b9b8ff";

  const axiosInstance = axios.create();
  const ranked = new RankedV1(axiosInstance);

  beforeEach(() => {
    axiosGetStub = sandbox.stub(axiosInstance, "get").resolves();
  });

  afterEach(() => sandbox.restore());

  it("should return the leader board from a specific region", async () => {
    await ranked.getLeaderboardByAct(actId);

    expect(axiosGetStub.getCalls().length).to.equals(1);
    expect(axiosGetStub.firstCall.args[0]).to.equal(
      `/val/ranked/v1/leaderboards/by-act/${actId}?size=20&startIndex=0`
    );
  });

  it("should return the leader board from a specific region with size of 10", async () => {
    await ranked.getLeaderboardByAct(actId, undefined, undefined);

    expect(axiosGetStub.getCalls().length).to.equals(1);
    expect(axiosGetStub.firstCall.args[0]).to.equal(
      `/val/ranked/v1/leaderboards/by-act/${actId}?size=20&startIndex=0`
    );
  });

  it("should return the leader board from a specific region with size of 10", async () => {
    await ranked.getLeaderboardByAct(actId, 10, undefined);

    expect(axiosGetStub.getCalls().length).to.equals(1);
    expect(axiosGetStub.firstCall.args[0]).to.equal(
      `/val/ranked/v1/leaderboards/by-act/${actId}?size=10&startIndex=0`
    );
  });

  it("should return the leader board from a specific region with startIndex of 10", async () => {
    await ranked.getLeaderboardByAct(actId, undefined, 10);

    expect(axiosGetStub.getCalls().length).to.equals(1);
    expect(axiosGetStub.firstCall.args[0]).to.equal(
      `/val/ranked/v1/leaderboards/by-act/${actId}?size=20&startIndex=10`
    );
  });

  it("should return the leader board from a specific region with size of 30 and startIndex of 10", async () => {
    await ranked.getLeaderboardByAct(actId, 30, 10);

    expect(axiosGetStub.getCalls().length).to.equals(1);
    expect(axiosGetStub.firstCall.args[0]).to.equal(
      `/val/ranked/v1/leaderboards/by-act/${actId}?size=30&startIndex=10`
    );
  });
});
