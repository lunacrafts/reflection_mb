import { ObjectId, WithId } from "mongodb";
import { inject, injectable } from "tsyringe";
import { LunaCollections } from "../luna.collections";
import { UserModel } from "../models/User.model";

@injectable()
export class UsersService {
  constructor(
    @inject(LunaCollections) private readonly collections: LunaCollections,
  ) { }

  async findOneById(_id: ObjectId) { }

  async findOneByEmail(email: string) { }

  async create(email: string, password: string) { }

  async extractTokenPayload(user: WithId<UserModel>) { }
}
