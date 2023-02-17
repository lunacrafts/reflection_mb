import { TRPCError } from '@trpc/server';
import { withLuna } from './withLuna.procedure';

export type WithSession = {
  account: {
    email: string
  }
}

export const withSession = withLuna.use(async ({ next, ctx }) => {
  const { luna } = ctx;

  return next({
    ctx: {

    }
  });
});
