const app = require("../../app");

const supertest = require("supertest");

describe("This route gives a string with n and m and the sum of the multiples", () => {
  it("GET /math/10/400", async () => {
    await supertest(app)
      .get("/math/10/400")
      .expect(200)
      .then((r) => {
        expect(r.text).toEqual("N is 10 and M is 400 and result is 7800");
      });
  });
});
