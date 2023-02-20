import { ObjectId } from "mongodb";
import { inject, injectable } from "tsyringe";
import { LunaCollections } from "../luna.collections";

@injectable()
export class UsersService {
  constructor(
    @inject(LunaCollections) private readonly collections: LunaCollections,
  ) { }

  async findOneById(_id: ObjectId) {
    const doc = await this.collections.users.findOne({
      _id
    });

    return doc;
  }

  async findOneByEmail(email: string) {
    const doc = await this.collections.users.findOne({
      email: email,
    });

    return doc;
  }

  async create(email: string, password: string) {
    const { insertedId, acknowledged } = await this.collections.users.insertOne({
      email: email,
      password: password,
    });

    if (acknowledged) {
      return await this.findOneById(insertedId);
    }
  }
}
