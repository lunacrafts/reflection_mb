import { Db, MongoClient } from "mongodb";
import { singleton } from "tsyringe";

@singleton()
export class LunaDatabase {
  client: MongoClient;
  db: Db;

  constructor(uri: string, db: string) {
    this.client = new MongoClient(uri);
    this.db = this.client.db(db);
  }

  async connect() {
    try {
      await this.client.connect();

      await this.client.db('admin').command({ ping: 1 });
    } finally {
      await this.client.close();
    }
  }
}
