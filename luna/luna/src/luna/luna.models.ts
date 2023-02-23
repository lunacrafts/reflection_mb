import { Collection } from "mongodb";
import { inject, injectable } from "tsyringe";
import { LunaDatabase } from "./luna.database";

@injectable()
export class LunaModels {
  constructor(
    @inject(LunaDatabase) private readonly database: LunaDatabase,
  ) { }
}
