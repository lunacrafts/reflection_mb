import { TRPCError } from "@trpc/server";
import { Luna, LunaJWT } from "luna-sdk";
import { z } from "zod";
import { t } from "../../../../trpc";
import { withLuna } from "../../../procedures/withLuna.procedure";
import UserMetadata from "supertokens-node/recipe/usermetadata";

const input = z.object({
  access_token: z.string(),
});

const output = z.object({
  currentUser: Luna.User
});

export const findByJWTToken = t.router({
  findByJWTToken: withLuna.input(input).output(output)
    .meta({
      openapi: {
        method: 'GET',
        path: '/auth/me',
        description: 'Fetch current account',
        tags: ['auth']
      }
    }).query(async ({ ctx: { luna }, input }) => {
      const { sub: id } = await LunaJWT.decodeJWTToken(input.access_token);

      const { metadata } = await UserMetadata.getUserMetadata(id);

      console.log('metadata');
      console.log(metadata);

      return {
        currentUser: {
          id,
          email: 'findByJWTToken@crafts.pl'
        }
      }

    })
})
