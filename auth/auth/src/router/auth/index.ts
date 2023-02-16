import { z } from "zod";
import { t } from "../../trpc";

export const auth = t.router({
  me: t.procedure
    .meta({
      openapi: {
        method: 'GET',
        path: '/auth/me',
        tags: ['auth']
      }
    })
    .input(z.void())
    .output(z.object({
      username: z.string()
    }))
    .query(async () => {
      return {
        username: 'LunaCrafts'
      }
    }),
});
