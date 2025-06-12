const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");
const expect = chai.expect;

chai.use(chaiHttp);

describe("Express App Routes", () => {
  it("GET / should return home page message", (done) => {
    chai
      .request(app)
      .get("/")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal("Welcome to the Home Page");
        done();
      });
  });

  it("POST /contact should return success with valid input", (done) => {
    chai
      .request(app)
      .post("/contact")
      .send({ name: "John", message: "Hello there!" })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property("success", true);
        done();
      });
  });

  it("POST /contact should return 400 for missing fields", (done) => {
    chai
      .request(app)
      .post("/contact")
      .send({ name: "" }) // missing message
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body).to.have.property("error");
        done();
      });
  });
});
