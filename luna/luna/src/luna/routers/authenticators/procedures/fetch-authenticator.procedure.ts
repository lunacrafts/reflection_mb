import { z } from 'zod';
import { Luna } from "luna-sdk";
import { TRPCError } from "@trpc/server";
import { t } from '../../../../trpc';

const input = z.object({
  token: z.string().nullable(),
  authenticator: z.string()
});

const output = z.object({
  authenticators: Luna.Authenticator,
});

export const fetchAuthenticator = t.router({
  fetchAuthenticator: t.procedure.input(input).output(output).query(async ({ }) => {
    throw new TRPCError({
      code: 'UNAUTHORIZED'
    })
  })
});
