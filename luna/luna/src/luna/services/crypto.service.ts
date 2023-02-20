import { ObjectId, WithId } from "mongodb";
import { inject, injectable } from "tsyringe";
import bcrypt from 'bcrypt';
import { LunaCollections } from "../luna.collections";
import { User } from "../models/user";

@injectable()
export class CryptoService {
  constructor() { }

  async encryptPassword(password: string) {
    const encryptedPassword = await bcrypt.hash(password, 10);
    return encryptedPassword;
  }

  async comparePasswords(password: string, encryptedPassword: string) {
    const isMatching = await bcrypt.compare(password, encryptedPassword);
    return isMatching;
  }
}
