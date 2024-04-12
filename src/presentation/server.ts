import { CheckService } from "../domain/use-cases/checks/check-service";
import { CronService } from "./cron/cron-service";

export class Server {
  public static start() {
    console.log("Server started");

    CronService.createJob("*/5 * * * * *", () => {
      const url = "https://google.com";
      new CheckService(
        () => console.log(`Service is up ${url}`),
        (error) => console.log(`Service is down ${error}`)
      ).execute(url);
    });
  }
}

Server.start(); // Server started
