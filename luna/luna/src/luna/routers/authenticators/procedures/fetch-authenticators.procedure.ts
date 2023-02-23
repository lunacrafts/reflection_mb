import { z } from 'zod';
import { Luna } from "luna-sdk";
import { TRPCError } from "@trpc/server";
import { t } from '../../../../trpc';

const input = z.object({
  token: z.string().nullable(),
  authenticators: z.array(z.string())
});

const output = z.object({
  // authenticators: z.array(Luna.Authenticator),
});

export const fetchAuthenticators = t.router({
  fetchAuthenticators: t.procedure.input(input).output(output).query(async ({ input }) => { })
});
