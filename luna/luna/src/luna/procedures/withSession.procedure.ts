import { TRPCError } from '@trpc/server';
import { withLuna } from './withLuna.procedure';

export type WithSession = {
  account?: {
    email: string
  }
}

export const withSession = withLuna.use(async ({ next, ctx: { luna }, }) => {
  // if (false) {
  //   return next({
  //     ctx: {
  //       account: {
  //         email: 'lunacrafts@protonmail.com'
  //       }
  //     }
  //   });
  // }

  // throw new TRPCError({
  //   code: 'UNAUTHORIZED'
  // });

  return next();
});
