import { TRPCError } from "@trpc/server"
import { t } from "./trpc";

export const withCurrentUserProtected = t.procedure.use(async ({ next, ctx }) => {
  const { currentUser } = await ctx.fetchCurrentUser();

  if (currentUser) {
    return next({
      ctx: {
        currentUser: currentUser
      }
    });
  }

  throw new TRPCError({
    code: 'UNAUTHORIZED'
  });
});
