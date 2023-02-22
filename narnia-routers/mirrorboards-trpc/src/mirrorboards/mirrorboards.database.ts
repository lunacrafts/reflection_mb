import { Db, MongoClient } from "mongodb";
import { singleton } from "tsyringe";

@singleton()
export class MirrorboardsDatabase {
  client: MongoClient;
  db: Db;

  constructor(uri: string, db: string) {
    this.client = new MongoClient(uri);
    this.db = this.client.db(db);
  }

  async connect() {
    await this.client.connect();
  }
}
