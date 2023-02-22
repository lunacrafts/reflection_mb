import { t } from "./trpc";

export const withCurrentUser = t.procedure.use(async ({ next, ctx }) => {
  const { user } = await ctx.fetchCurrentUser();

  return next({
    ctx: {
      user: user
    }
  });
});
