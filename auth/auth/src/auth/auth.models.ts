import mongoose from 'mongoose';
import { inject, injectable } from "tsyringe";
import { AuthDatabase } from "./auth.database";
import { User } from './models/User.model';

@injectable()
export class AuthModels {
  User: typeof User;

  constructor(
    @inject(AuthDatabase) private readonly database: AuthDatabase,
  ) {
    this.User = User;
  }
}
