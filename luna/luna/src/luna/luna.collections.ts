import { Collection } from "mongodb";
import { inject, injectable } from "tsyringe";
import { LunaDatabase } from "./luna.database";
import { User } from "./models/user";

@injectable()
export class LunaCollections {
  users: Collection<User>

  constructor(
    @inject(LunaDatabase) private readonly database: LunaDatabase,
  ) {
    this.users = this.database.db.collection<User>('users');
    this.users.createIndex({ email: 1 }, { unique: true });
  }
}
