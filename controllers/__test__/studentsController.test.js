const app = require("../../app");

const supertest = require("supertest");

describe("should return an array of students", () => {
  it("GET /students/2", async () => {
    await supertest(app)
      .get("/students/2")
      .expect(200)
      .then((r) => {
        expect(r.json).toEqual(
          [
            {
              city: "Sanghan",
              company: "Avamm",
              email: "cboards1@weibo.com",
              firstName: "Clarke",
              grades: ["75", "89", "95", "93", "99", "82", "89", "76"],
              id: "2",
              lastName: "Boards",
              pic: "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/voluptasautreprehenderit.jpg",
              skill: "Sports",
            },
          ].json
        );
      });
  });
});
