import sinon, { SinonSandbox, SinonStub } from "sinon";
import axios from "axios";
import chai, { expect } from "chai";
import chaiAsPromised from "chai-as-promised";
import { ContentV1 } from "../contentV1";
import { Locales } from "../../../../types/valorant/locales";

chai.use(chaiAsPromised);

describe("ContentV1", () => {
  let sandbox: SinonSandbox = sinon.createSandbox();

  let axiosGetStub: SinonStub;

  const axiosInstance = axios.create({ baseURL: "https://www.test.com" });
  const content = new ContentV1(axiosInstance);

  beforeEach(() => {
    axiosGetStub = sandbox.stub(axiosInstance, "get").resolves();
  });

  afterEach(() => sandbox.restore());

  it("should return a list of all available content for all locales available", async () => {
    await content.getAllContent();

    expect(axiosGetStub.getCalls().length).to.equals(1);
    expect(axiosGetStub.firstCall.args[0]).to.equal(`/val/content/v1/contents`);
  });

  it("should return a list of all available content in en-GB", async () => {
    await content.getAllContent(Locales.EN_GB);

    expect(axiosGetStub.getCalls().length).to.equals(1);
    expect(axiosGetStub.firstCall.args[0]).to.equal(
      `/val/content/v1/contents?locale=en-GB`
    );
  });
});
