import t from "../../trpc";
import { z } from 'zod';

const input = z.object({
  token: z.string().nullable(),
  authenticators: z.array(z.string())
});

export const fetchAuthenticators = t.router({
  fetchAuthenticators: t.procedure.input(input).output(input).query(async ({ input }) => {
    return {
      token: input.token,
      authenticators: input.authenticators,
    }
  })
});
