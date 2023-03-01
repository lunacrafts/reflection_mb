import { inject, injectable } from "tsyringe";
import { LunaDatabase } from "./luna.database";

import { Mirrorboard } from './models/Mirrorboard.model';

@injectable()
export class LunaModels {
  Mirrorboard: typeof Mirrorboard;

  constructor(
    @inject(LunaDatabase) private readonly database: LunaDatabase,
  ) {
    this.Mirrorboard = Mirrorboard;
  }
}
