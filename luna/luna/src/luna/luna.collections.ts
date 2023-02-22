import { Collection } from "mongodb";
import { inject, injectable } from "tsyringe";
import { LunaDatabase } from "./luna.database";
import { UserModel } from "./models/User.model";

@injectable()
export class LunaCollections {
  users: Collection<UserModel>

  constructor(
    @inject(LunaDatabase) private readonly database: LunaDatabase,
  ) {
    this.users = this.database.db.collection<UserModel>('users');
    this.users.createIndex({ email: 1 }, { unique: true });
  }
}
