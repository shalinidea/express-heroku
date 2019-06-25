const request = require("supertest");
const app = require("./index");

describe("My service", () => {
  it("it should get a greeting", () => {
    return request(app)
      .get("/")
      .expect("Hello!");
  });
});
