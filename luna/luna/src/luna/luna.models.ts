import mongoose from 'mongoose';
import { inject, injectable } from "tsyringe";
import { LunaDatabase } from "./luna.database";
import { User } from './models/User.model';

@injectable()
export class LunaModels {
  User: typeof User;

  constructor(
    @inject(LunaDatabase) private readonly database: LunaDatabase,
  ) {
    this.User = User;
  }
}
