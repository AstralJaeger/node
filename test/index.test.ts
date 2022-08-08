describe("unit tests", () => {
   it("can run tests", async () => {
     expect(1).toBe(1);
   });
});

let runIntegrationTests = true;
if (process.env.github != null) {
  const refType = JSON.parse(process.env.github).ref_type;
  runIntegrationTests = refType == "branch";
}
if (runIntegrationTests) {
  describe("integration tests", () => {
    it("can run integration test", () => {
      expect(1).toBe(1);
    });
  });
}
