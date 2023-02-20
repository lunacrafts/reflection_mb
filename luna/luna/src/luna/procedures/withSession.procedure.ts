import { TRPCError } from '@trpc/server';
import { AuthSession } from '../services/auth.service';
import { serialize } from '../utils/serialize';
import { withLuna } from './withLuna.procedure';

export type WithSession = {
  user?: AuthSession
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
    const user = await luna.services.users.findOneByEmail(decoded.email);

    if (user) {
      return next({
        ctx: {
          user: serialize(user)
        }
      });
    }
  } catch (cause) { }

  throw new TRPCError({
    code: 'UNAUTHORIZED'
  });
});
