import { singleton } from "tsyringe";
import mongoose from 'mongoose';
import { accessibleRecordsPlugin } from '@casl/mongoose';

@singleton()
export class LunaDatabase {
  constructor(private readonly uri: string, private readonly dbName: string) { }

  async connect() {
    mongoose.set('strictQuery', false);
    mongoose.plugin(accessibleRecordsPlugin);

    await mongoose.connect(this.uri, {
      dbName: this.dbName
    });
  }
}
