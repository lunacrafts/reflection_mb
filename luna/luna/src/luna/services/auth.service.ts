import { inject, injectable } from "tsyringe";
import jwt from 'jsonwebtoken';
import { envs } from "../../envs";
import { z } from "zod";

export const AuthSession = z.object({
  id: z.string(),
  email: z.string().email(),
});

export type AuthSession = z.infer<typeof AuthSession>;

@injectable()
export class AuthService {
  constructor() { }

  async issueJWTToken(email: string, password: string) {

  }

  async decodeJWTToken(token: string) {
    const decoded = jwt.verify(token, envs.JWT_SECRET_KEY);

    if (decoded) {
      return AuthSession.parse(decoded);
    }

    throw new Error('AuthService.decodeJWTToken');
  }
}
