import { singleton } from "tsyringe";
import mongoose from 'mongoose';

@singleton()
export class LunaDatabase {
  constructor(private readonly uri: string, private readonly dbName: string) { }

  async connect() {
    mongoose.set('strictQuery', false);

    await mongoose.connect(this.uri, {
      dbName: this.dbName
    });
  }
}
