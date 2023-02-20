import { TRPCError } from "@trpc/server";
import { Luna } from "luna-sdk";
import jwt from 'jsonwebtoken';
import { z } from "zod";
import { t } from "../../../../trpc";
import { withLuna } from "../../../procedures/withLuna.procedure";
import { envs } from "../../../../envs";
import { serialize } from "../../../utils/serialize";

const input = z.object({
  email: z.string().email(),
  password: z.string(),
})

const output = z.object({
  token: z.string(),
  user: Luna.User,
});

export const login = t.router({
  login: withLuna.input(input).output(output)
    .meta({
      openapi: {
        method: 'POST',
        path: '/auth/login',
        protect: true,
        tags: ['auth']
      }
    }).mutation(async ({ input, ctx: { luna } }) => {

      const user = await luna.services.users.findOneByEmail(input.email);
      if (!user) {
        throw new TRPCError({
          code: 'UNAUTHORIZED',
        });
      }

      const isPasswordMatching = await luna.services.crypto.comparePasswords(input.password, user.encryptedPassword);
      if (!isPasswordMatching) {
        throw new TRPCError({
          code: 'UNAUTHORIZED',
          message: '123'
        });
      }

      const payload = await luna.services.users.extractTokenPayload(user);
      const token = jwt.sign(payload, envs.JWT_SECRET_KEY, {
        expiresIn: envs.JWT_EXPIRES_IN,
      });

      return {
        token: token,
        user: serialize(user),
      }
    })
})
