import { Schema, model } from "mongoose";

const logSchema = new Schema({
  level: {
    type: String,
    enum: ["low", "medium", "high"],
    default: "low",
  },
  message: {
    type: String,
    required: true,
  },
  origin: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export const LogModel = model("Log", logSchema);
