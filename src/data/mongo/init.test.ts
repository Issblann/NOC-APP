import mongoose from "mongoose";
import { MongoDataBase } from "./init";

describe("init mongo", () => {
  afterAll(() => {
    mongoose.connection.close();
  });

  test("should connect to MongoDB", async () => {
    const connected = await MongoDataBase.connect({
      dbName: process.env.MONGO_DB_NAME!,
      mongoUrl: process.env.MONGO_URL!,
    });

    expect(connected).toBe(true);
  });
});
