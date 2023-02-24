import { TRPCError } from '@trpc/server';
import { Luna } from 'luna-sdk';
import { withLuna } from './withLuna.procedure';

export type WithSession = {
  currentUser?: Luna.User
}

export const withSession = withLuna.use(async ({ next, ctx }) => {
  return next();
});
