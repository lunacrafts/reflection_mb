import { t } from "./trpc";

export const withCurrentUser = t.procedure.use(async ({ next, ctx }) => {
  const { currentUser } = await ctx.fetchCurrentUser();

  return next({
    ctx: {
      currentUser: currentUser
    }
  });
});
