import t from "../../trpc";
import { z } from 'zod';
import { Luna } from "luna-sdk";
import { TRPCError } from "@trpc/server";
import { fetchAuthenticatorsFromExternalAPI } from "./_mock_fetchAuthenticatorsFromExternalApi";

const input = z.object({
  token: z.string().nullable(),
  authenticator: z.string()
});

const output = z.object({
  authenticators: Luna.Authenticator,
});

export const fetchAuthenticator = t.router({
  fetchAuthenticator: t.procedure.input(input).output(output).query(async ({ input }) => {
    const authenticator = await fetchAuthenticatorsFromExternalAPI(input.token, [input.authenticator]);

    if (authenticator.length === 1) {
      return {
        authenticators: authenticator[0],
      }
    }

    throw new TRPCError({
      code: 'UNAUTHORIZED'
    })
  })
});
