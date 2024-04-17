import { envs } from "../config/plugins/envs.plugin";
import { LogSeverityLevel } from "../domain/entities/log.entity";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { SendEmailLogs } from "../domain/use-cases/email/send-email-logs";
import { FileSystemDataSource } from "../infrastructure/datasources/file-system.datasource";
import { MongoLogDataSource } from "../infrastructure/datasources/mongo-log.datasource";
import { PostresLogDataSource } from "../infrastructure/datasources/postgres-log.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";
import { EmailService } from "./email/email.service";

const logRepository = new LogRepositoryImpl(
  // new MongoLogDataSource()
  new PostresLogDataSource()
);
const emailService = new EmailService();
export class Server {
  public static async start() {
    console.log("Server started");

    // TODO: Mandar email
    // new SendEmailLogs(emailService, fileSystemLogRepository).execute([
    //   "anaisabelpp@outlook.com",
    // ]);
    // emailService.sendEmailWithFileSystemLogs(["anaisabelpp@outlook.com"]);

    CronService.createJob("*/5 * * * * *", () => {
      const url = "https://googasdle.com";
      new CheckService(
        logRepository,
        () => console.log(`Service is up ${url}`),
        (error) => console.log(`Service is down ${error}`)
      ).execute(url);
    });

    // const logs = await logRepository.getLogs(LogSeverityLevel.low);
    // console.log(logs);
  }
}

Server.start(); // Server started
