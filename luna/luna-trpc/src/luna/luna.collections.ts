import { inject, injectable } from "tsyringe";
import { LunaDatabase } from "./luna.database";

@injectable()
export class LunaCollections {

  constructor(
    @inject(LunaDatabase) private readonly database: LunaDatabase,
  ) {
  }
}
