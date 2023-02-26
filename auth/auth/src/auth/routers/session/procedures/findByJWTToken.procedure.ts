import { TRPCError } from "@trpc/server";
import { Luna, LunaJWT } from "luna-sdk";
import { z } from "zod";
import { t } from "../../../../trpc";
import UserMetadata from "supertokens-node/recipe/usermetadata";
import { withAuthContainer } from "../../../procedures/withAuthContainer.procedure";

const input = z.object({
  access_token: z.string(),
});

const output = z.object({
  currentUser: Luna.User
});

export const findByJWTToken = t.router({
  findByJWTToken: withAuthContainer.input(input).output(output)
    .meta({
      openapi: {
        method: 'GET',
        path: '/auth/findByJWTToken',
        description: 'Fetch current account',
        tags: ['auth']
      }
    }).query(async ({ input }) => {
      const { sub: id } = await LunaJWT.decodeJWTToken(input.access_token);

      const { metadata } = await UserMetadata.getUserMetadata(id);

      return {
        currentUser: {
          id,
          email: metadata.email,
        }
      }

    })
})
