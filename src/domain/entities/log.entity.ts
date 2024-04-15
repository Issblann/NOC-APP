export enum LogSeverityLevel {
  low = "low",
  medium = "medium",
  high = "high",
}

export interface LogEntityOptions {
  level: LogSeverityLevel;
  message: string;
  createdAt?: Date;
  origin: string;
}
export class LogEntity {
  public level: LogSeverityLevel;
  public message: string;
  public createdAt: Date;
  public origin: string;

  constructor(options: LogEntityOptions) {
    const { message, level, origin, createdAt = new Date() } = options;
    this.level = level;
    this.message = message;
    this.createdAt = new Date();
    this.origin = origin;
  }

  static fromJSON(json: string): LogEntity {
    const { message, level, createdAt } = JSON.parse(json);
    const log = new LogEntity({ message, level, createdAt, origin });
    return log;
  }
}
