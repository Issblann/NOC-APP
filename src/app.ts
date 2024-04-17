import { PrismaClient } from "@prisma/client";
import { envs } from "./config/plugins/envs.plugin";
import { LogModel, MongoDataBase } from "./data/mongo";
import { Server } from "./presentation/server";

(async () => {
  main();
})();

async function main() {
  await MongoDataBase.connect({
    mongoUrl: envs.MONGO_URL,
    dbName: envs.MONGO_DB_NAME,
  });

  // const prisma = new PrismaClient();
  // const newLog = await prisma.logModel.create({
  //   data: {
  //     level: "LOW",
  //     message: "Test message",
  //     origin: "App.ts",
  //   },
  // });
  // const logs = await prisma.logModel.findMany({
  //   where: {
  //     level: "LOW",
  //   },
  // });
  // console.log(logs);
  Server.start();
  // const logs = await LogModel.find();
  // console.log(logs);
}
