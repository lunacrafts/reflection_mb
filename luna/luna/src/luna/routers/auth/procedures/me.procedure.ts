import { Luna } from "luna-sdk";
import { z } from "zod";
import { t } from "../../../../trpc";
import { withSession } from "../../../procedures/withSession.procedure";

const input = z.void();

const output = z.object({
  user: Luna.User
});

export const me = t.router({
  me: withSession.input(input).output(output)
    .meta({
      openapi: {
        method: 'GET',
        path: '/auth/me',
        description: 'Fetch current account',
        tags: ['auth']
      }
    }).query(({ ctx: { user } }) => {
      return { user }
    })
})
