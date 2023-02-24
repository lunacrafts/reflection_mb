import { TRPCError } from "@trpc/server";
import { Luna } from "luna-sdk";
import { z } from "zod";
import { t } from "../../../../trpc";
import { withLuna } from "../../../procedures/withLuna.procedure";

const input = z.void();

const output = z.object({
  currentUser: Luna.User
});

export const me = t.router({
  me: withLuna.input(input).output(output)
    .meta({
      openapi: {
        method: 'GET',
        path: '/auth/me',
        description: 'Fetch current account',
        tags: ['auth']
      }
    }).query(async ({ ctx: { luna }, input }) => {
      throw new TRPCError({
        code: 'UNAUTHORIZED'
      });
    })
})
