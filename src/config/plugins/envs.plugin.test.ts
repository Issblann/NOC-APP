import { envs } from "./envs.plugin";

describe("envs.plugin.ts", () => {
  test("should return env options", () => {
    expect(envs).toEqual({
      PORT: 3000,
      MAILER_EMAIL: "anaperafan.dev@gmail.com",
      MAILER_SECRET_KEY: "1234224523",
      PROD: false,
      MAILER_SERVICE: "gmail",
      MONGO_URL: "mongodb://anaperez:123456789@localhost:27017",
      MONGO_DB_NAME: "NOC-TEST",
      MONGO_USER: "anaperez",
      MONGO_PASS: "123456789",
      POSTGRES_URL: "postgresql://postgres:123456789@localhost:5432/NOC",
      POSTGRES_DB: "NOC-TEST",
      POSTGRES_USER: "postgres",
      POSTGRES_PASSWORD: "123456789",
    });
  });

  test("should return error if not found env", async () => {
    jest.resetModules();
    process.env.PORT = "ABC";

    try {
      await import("./envs.plugin");
      expect(true).toBe(false);
    } catch (error) {
      expect(`${error}`).toContain('"PORT" should be a valid integer');
    }
  });
});
