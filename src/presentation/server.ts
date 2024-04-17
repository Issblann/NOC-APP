import { envs } from "../config/plugins/envs.plugin";
import { LogSeverityLevel } from "../domain/entities/log.entity";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { CheckServiceMultiple } from "../domain/use-cases/checks/check-service-multiple";
import { SendEmailLogs } from "../domain/use-cases/email/send-email-logs";
import { FileSystemDataSource } from "../infrastructure/datasources/file-system.datasource";
import { MongoLogDataSource } from "../infrastructure/datasources/mongo-log.datasource";
import { PostresLogDataSource } from "../infrastructure/datasources/postgres-log.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";
import { EmailService } from "./email/email.service";

const fsLogRepository = new LogRepositoryImpl(
  // new MongoLogDataSource()
  new FileSystemDataSource()
);
const mongoLogRepository = new LogRepositoryImpl(new MongoLogDataSource());
const postgresLogRepository = new LogRepositoryImpl(new PostresLogDataSource());
const emailService = new EmailService();
export class Server {
  public static async start() {
    console.log("Server started");

    // TODO: Mandar email
    // new SendEmailLogs(emailService, fileSystemLogRepository).execute([
    //   "anaisabelpp@outlook.com",
    // ]);
    // emailService.sendEmailWithFileSystemLogs(["anaisabelpp@outlook.com"]);

    // CronService.createJob("*/5 * * * * *", () => {
    //   const url = "https://google.com";
    //   new CheckServiceMultiple(
    //     [fsLogRepository, mongoLogRepository, postgresLogRepository],
    //     () => console.log(`Service is up ${url}`),
    //     (error) => console.log(`Service is down ${error}`)
    //   ).execute(url);
    // });
  }
}

Server.start(); // Server started
