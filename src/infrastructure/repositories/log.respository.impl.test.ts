import { LogDataSource } from "../../domain/datasources/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
import { LogRepository } from "../../domain/repository/log.repository";
import { LogRepositoryImpl } from "./log.repository.impl";

describe("LogRepositoryImpl", () => {
  const mockDataSource: LogDataSource = {
    saveLog: jest.fn(),
    getLogs: jest.fn(),
  };
  const logRepository = new LogRepositoryImpl(mockDataSource);

  beforeAll(() => {
    jest.clearAllMocks();
  });
  test("saveLog should call the datasource with arguments", async () => {
    const log = {
      message: "test",
      level: LogSeverityLevel.low,
      origin: "log.repository.impl.test.ts",
    } as LogEntity;

    await logRepository.saveLog(log);
    expect(mockDataSource.saveLog).toHaveBeenCalledWith(log);
  });

  test("getLogs should call the datasource with arguments", async () => {
    await logRepository.getLogs(LogSeverityLevel.low);
    expect(mockDataSource.getLogs).toHaveBeenCalledWith(LogSeverityLevel.low);
  });
});
