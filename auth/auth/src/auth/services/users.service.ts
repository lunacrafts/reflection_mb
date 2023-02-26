import { inject, injectable } from "tsyringe";
import { AuthModels } from "../auth.models";

@injectable()
export class UsersService {
  constructor(
    @inject(AuthModels) private readonly models: AuthModels,
  ) { }
  async create(id: string, email: string) {
    const user = new this.models.User({ id, email });
    const doc = await user.save();

    return doc;
  }
}
