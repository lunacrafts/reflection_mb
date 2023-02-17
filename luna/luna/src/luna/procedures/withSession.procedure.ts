import { TRPCError } from '@trpc/server';
import { withLuna } from './withLuna.procedure';

export type WithSession = {
  account?: {
    email: string
  }
}

export const withSession = withLuna.use(async ({ next, ctx }) => {
  const { luna } = ctx;

  if (false) {
    return next({
      ctx: {
        account: {
          email: 'lunacrafts@protonmail.com'
        }
      }
    });
  }

  throw new TRPCError({
    code: 'UNAUTHORIZED'
  });
});
