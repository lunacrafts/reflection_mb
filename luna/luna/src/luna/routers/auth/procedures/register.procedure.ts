import { TRPCError } from "@trpc/server";
import { Luna } from "luna-sdk";
import { z } from "zod";
import { t } from "../../../../trpc";
import { withLuna } from "../../../procedures/withLuna.procedure";

const input = z.object({
  email: z.string().email(),
  password: z.string(),
  repeatPassword: z.string(),
})

const output = z.object({
  user: Luna.User,
});

export const register = t.router({
  register: withLuna.input(input).output(output)
    .meta({
      openapi: {
        method: 'POST',
        path: '/auth/register',
        tags: ['auth']
      }
    }).mutation(async ({ input, ctx: { luna } }) => {
      if (input.password !== input.repeatPassword) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'Passwords do not match'
        });
      }

      const accountWithGivenEmail = await luna.services.users.findOneByEmail(input.email);
      if (accountWithGivenEmail != null) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'This e-mail address is already used'
        });
      }

      const user = await luna.services.users.create(input.email, input.password);

      if (user) {
        return {
          user: user,
        }
      }

      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Auth.register'
      });
    })
})
