import { inject, injectable } from "tsyringe";
import { LunaModels } from "../luna.models";

@injectable()
export class UsersService {
  constructor(
    @inject(LunaModels) private readonly models: LunaModels,
  ) { }

  async findOneById(id: string) {
    const doc = await this.models.User.findOne({ id });
    return doc;
  }
}
