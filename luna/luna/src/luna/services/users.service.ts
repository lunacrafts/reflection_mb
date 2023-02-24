import { ObjectId, WithId } from "mongodb";
import { inject, injectable } from "tsyringe";
import { LunaModels } from "../luna.models";

@injectable()
export class UsersService {
  constructor(
    @inject(LunaModels) private readonly models: LunaModels,
  ) { }

  async findOneById(_id: ObjectId) { }

  async findOneByEmail(email: string) { }

  async create(id: string, email: string) {
    const user = new this.models.User({ id, email });
    const doc = await user.save();

    return doc;
  }

  async extractTokenPayload() { }
}
