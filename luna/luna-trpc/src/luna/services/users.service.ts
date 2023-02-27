import { inject, injectable } from "tsyringe";
import { LunaCollections } from "../luna.collections";

@injectable()
export class UsersService {
  constructor(
    @inject(LunaCollections) private readonly collections: LunaCollections,
  ) { }
}
