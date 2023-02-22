import { ObjectId, WithId } from "mongodb";
import { inject, injectable } from "tsyringe";
import { LunaCollections } from "../luna.collections";
import { UserModel } from "../models/User.model";
import { CryptoService } from "./crypto.service";

@injectable()
export class UsersService {
  constructor(
    @inject(LunaCollections) private readonly collections: LunaCollections,
    @inject(CryptoService) private readonly crypto: CryptoService,
  ) { }

  async findOneById(_id: ObjectId) {
    const doc = await this.collections.users.findOne({ _id });
    return doc;
  }

  async findOneByEmail(email: string) {
    const doc = await this.collections.users.findOne({ email });
    return doc;
  }

  async create(email: string, password: string) {
    const encryptedPassword = await this.crypto.encryptPassword(password);

    const { insertedId, acknowledged } = await this.collections.users.insertOne({
      email: email,
      encryptedPassword: encryptedPassword,
    });

    if (acknowledged) {
      return await this.findOneById(insertedId);
    }
  }

  async extractTokenPayload(user: WithId<UserModel>) {
    return {
      _id: user._id.toString(),
      email: user.email,
    }
  }
}
