import { z } from 'zod';
import { Luna } from "luna-sdk";
import { TRPCError } from "@trpc/server";
import { t } from '../../../../trpc';
import { ObjectId } from 'mongodb';

const input = z.object({
  token: z.string(),
  authenticator: z.string()
});

const output = z.object({
  // authenticators: Luna.Authenticator,
});

export const fetchAuthenticator = t.router({
  fetchAuthenticator: t.procedure.input(input).output(output)
    .meta({
      openapi: {
        method: 'GET',
        path: '/authenticators/fetch-authenticator',
      }
    })
    .query(async ({ }) => { })
});
