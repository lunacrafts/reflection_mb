import { inject, injectable } from "tsyringe";

@injectable()
export class AuthService {
  constructor(
  ) { }

  async issueJWTToken(email: string, password: string) {

  }

  async decodeJWTToken(token: string) {

  }
}
