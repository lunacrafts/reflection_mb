import { injectable } from "tsyringe";
import jwt from 'jsonwebtoken';
import { envs } from "../../envs";
import { z } from "zod";

export const JwtPayload = z.object({
  _id: z.string(),
  email: z.string().email(),
});

export type JwtPayload = z.infer<typeof JwtPayload>;

@injectable()
export class AuthService {
  constructor() { }

  async issueJWTToken(payload: JwtPayload) {
    const token = jwt.sign(payload, envs.JWT_SECRET_KEY, {
      expiresIn: envs.JWT_EXPIRES_IN,
    });

    return token;
  }

  async decodeJWTToken(token: string) {
    const decoded = jwt.verify(token, envs.JWT_SECRET_KEY);

    if (decoded) {
      return JwtPayload.parse(decoded);
    }

    throw new Error('AuthService.decodeJWTToken');
  }
}
