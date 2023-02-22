import { TRPCError } from "@trpc/server"
import { t } from "./trpc";

export const withCurrentUserProtected = t.procedure.use(async ({ next, ctx }) => {
  const { user } = await ctx.fetchCurrentUser();

  if (user) {
    return next({
      ctx: {
        user: user
      }
    });
  }

  throw new TRPCError({
    code: 'UNAUTHORIZED'
  });
});
