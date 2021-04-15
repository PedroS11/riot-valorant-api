import sinon, { SinonSandbox, SinonStub } from "sinon";
import axios from "axios";
import chai, { expect } from "chai";
import chaiAsPromised from "chai-as-promised";
import { StatusV1 } from "../statusV1";

chai.use(chaiAsPromised);

describe("RankedV1", () => {
  let sandbox: SinonSandbox = sinon.createSandbox();

  let axiosGetStub: SinonStub;

  const axiosInstance = axios.create({ baseURL: "https://www.test.com" });
  const ranked = new StatusV1(axiosInstance);

  beforeEach(() => {
    axiosGetStub = sandbox.stub(axiosInstance, "get").resolves();
  });

  afterEach(() => sandbox.restore());

  it("should return a list of all available content", async () => {
    await ranked.getAllContent();

    expect(axiosGetStub.getCalls().length).to.equals(1);
    expect(axiosGetStub.firstCall.args[0]).to.equal(`/val/content/v1/contents`);
  });
});
