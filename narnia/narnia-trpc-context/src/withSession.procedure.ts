import { t } from "./trpc";

export const withSession = t.procedure.use(async ({ next, ctx }) => {
  // const { currentUser } = await ctx.fetchCurrentUser();

  const payload = await ctx.decodeJWTToken();

  console.log('decoded payload');
  console.log(payload);

  return next({
    ctx: {
      // currentUser: currentUser
    }
  });
});
