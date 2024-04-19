import { set } from "mongoose";
import { CronService } from "./cron-service";

describe("CronService", () => {
  const mockTick = jest.fn();
  test("should create a new cron job", (done) => {
    const job = CronService.createJob("* * * * * *", mockTick);

    setTimeout(() => {
      expect(mockTick).toHaveBeenCalledTimes(2);

      done();
    }, 2000);
  });
});
