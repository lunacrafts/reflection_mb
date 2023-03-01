import { inferAsyncReturnType } from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';
import { LunaJWT } from 'luna-sdk';
import { WithLuna } from './luna/luna.withLuna.procedure';
import { WithCurrentUser } from './luna/middlewares/withCurrentUser.middleware';
import { WithCurrentUserProtected } from './luna/middlewares/withCurrentUserProtected.middleware';

export type LunaContext =
  WithLuna &
  WithCurrentUser &
  WithCurrentUserProtected &
  inferAsyncReturnType<typeof createContext>;

export const createContext = async ({ req, res }: trpcExpress.CreateExpressContextOptions) => {
  const decodeJWTToken = async () => {
    const token = req.cookies['access_token'];
    const decoded = await LunaJWT.decodeJWTToken(token);

    return decoded;
  }

  return {
    decodeJWTToken,
  }
}
