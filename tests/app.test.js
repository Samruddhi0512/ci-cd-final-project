const http = require("http");

describe("Application", () => {
  let server;

  beforeAll(() => {
    server = require("../app");
  });

  afterAll(() => {
    server.close();
  });

  test("server should run on port 8000", () => {
    expect(server.address().port).toBe(8000);
  });

  test("server should respond with SERVICERUNNING", (done) => {
    http.get("http://localhost:8000", (res) => {
      let data = "";

      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        expect(data).toBe("SERVICERUNNING");
        done();
      });
    });
  });
});
