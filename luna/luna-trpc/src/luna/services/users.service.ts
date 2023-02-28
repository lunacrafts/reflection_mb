import { inject, injectable } from "tsyringe";
import { LunaModels } from "../luna.models";

@injectable()
export class UsersService {
  constructor(
    @inject(LunaModels) private readonly collections: LunaModels,
  ) { }
}
