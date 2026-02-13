test("GET to /api/v1/status should return 200", async () => {
  // expect(calculadora.somar(2, 2)).toBe(4);
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);
});
