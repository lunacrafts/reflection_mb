import { inject, injectable } from "tsyringe";
import { LunaDatabase } from "./luna.database";

import { User } from './models/User.model';
import { Mirrorboard } from './models/Mirrorboard.model';

@injectable()
export class LunaModels {
  User: typeof User;
  Mirrorboard: typeof Mirrorboard;

  constructor(
    @inject(LunaDatabase) private readonly database: LunaDatabase,
  ) {
    this.User = User;
    this.Mirrorboard = Mirrorboard;
  }
}
