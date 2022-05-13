import chai, { expect } from "chai";
import charAsPromised from "chai-as-promised";
import axios from "axios";
import { axiosInterceptor } from "../axiosInterceptor";
import { ApiError } from "../../types/apiError";
import MockAdapter from "axios-mock-adapter";

chai.use(charAsPromised);

describe("axiosInterceptor", () => {
  let axiosStub: MockAdapter;

  beforeEach(() => {
    axiosStub = new MockAdapter(axios);
  });

  afterEach(() => {
    axiosStub.restore();
  });

  it("should return the error with a custom format when an error occurs", async () => {
    axiosStub.onGet("/").reply(500, "OH NO");
    const instance = axiosInterceptor(
      axios.create({
        baseURL: "http://test.com",
      })
    );

    try {
      await instance.get("/");
    } catch (e) {
      expect(e).to.deep.equal({
        error: "OH NO",
        request: {
          baseUrl: "http://test.com",
          headers: {
            Accept: "application/json, text/plain, */*",
          },
          method: "get",
          path: "/",
        },
        status: 500,
      } as ApiError);
    }
  });

  it("should return the data object when the request succeeds", async () => {
    axiosStub.onGet("/").reply(200, { message: "Ok" });
    const instance = axiosInterceptor(
      axios.create({
        baseURL: "http://test.com",
      })
    );

    const result = await instance.get("/");

    expect(result).to.deep.equal({
      message: "Ok",
    });
  });
});
