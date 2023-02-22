import { TRPCError } from '@trpc/server';
import { Luna } from 'luna-sdk';
import { withLuna } from './withLuna.procedure';

export type WithSession = {
  currentUser?: Luna.User
}

export const withSession = withLuna.use(async ({ next, ctx: { luna, getAuthorizationToken }, }) => {
  const token = getAuthorizationToken();

  if (!token) {
    throw new TRPCError({
      code: 'UNAUTHORIZED'
    });
  }

  try {
    const decoded = await luna.services.auth.decodeJWTToken(token);
    const currentUser = await luna.services.users.findOneByEmail(decoded.email);

    if (currentUser) {
      return next({
        ctx: {
          currentUser: currentUser
        }
      });
    }
  } catch (cause) { }

  throw new TRPCError({
    code: 'UNAUTHORIZED'
  });
});
