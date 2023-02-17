import mongoose from "mongoose";
import { singleton } from "tsyringe";

@singleton()
export class LunaDatabase {
  public MONGODB_URI: string;

  constructor(MONGODB_URI: string) {
    this.MONGODB_URI = MONGODB_URI;
  }

  async connect() {
    await mongoose.connect(this.MONGODB_URI);
  }
}
