const app = require("../../app");

const supertest = require("supertest");

describe("should return one of the students", () => {
  it("GET /students/2", async () => {
    await supertest(app)
      .get("/students/2")
      .expect(200)
      .then((r) => {
        expect(r.body.company).toEqual("Avamm");
      });
  });
});
