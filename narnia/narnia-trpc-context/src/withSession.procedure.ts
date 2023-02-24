import { t } from "./trpc";

export const withSession = t.procedure.use(async ({ next, ctx }) => {
  // const { currentUser } = await ctx.fetchCurrentUser();

  try {
    const payload = await ctx.decodeJWTToken();
    console.log('decoded payload');
    console.log(payload);
  } catch (e) {
    console.log('With Session Error');
    console.log(e);
  }

  return next({
    ctx: {
      // currentUser: currentUser
    }
  });
});
