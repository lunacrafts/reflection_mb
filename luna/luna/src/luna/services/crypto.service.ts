import { injectable } from "tsyringe";
import bcrypt from 'bcrypt';

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
