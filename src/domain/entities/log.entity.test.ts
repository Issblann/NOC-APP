import { text } from "stream/consumers";
import { LogEntity, LogSeverityLevel } from "./log.entity";

const dataObj = {
  message: "Test log entity",
  level: LogSeverityLevel.low,
  origin: "log.entity.test.ts",
};

describe("Log Entity", () => {
  test("should create a log entity instance", () => {
    const log = new LogEntity(dataObj);

    expect(log).toBeInstanceOf(LogEntity);
    expect(log.message).toBe(dataObj.message);
    expect(log.level).toBe(dataObj.level);
    expect(log.origin).toBe(dataObj.origin);
    expect(log.createdAt).toBeInstanceOf(Date);
  });

  test("should create a log entity instance from JSON", () => {
    const json = `{"level":"low","message":"Service https://google.com working","createdAt":"2024-04-17T16:55:55.653Z","origin":"check-service.ts"}`;

    const log = LogEntity.fromJSON(json);

    expect(log).toBeInstanceOf(LogEntity);
    expect(log.message).toBe("Service https://google.com working");
    expect(log.level).toBe(LogSeverityLevel.low);
    expect(log.origin).toBe("check-service.ts");
    expect(log.createdAt).toBeInstanceOf(Date);
  });

  test("should create a LogEntity instance from object", () => {
    const log = LogEntity.fromObject(dataObj);

    expect(log).toBeInstanceOf(LogEntity);
    expect(log.message).toBe(dataObj.message);
    expect(log.level).toBe(dataObj.level);
    expect(log.origin).toBe(dataObj.origin);
    expect(log.createdAt).toBeInstanceOf(Date);
  });
});
