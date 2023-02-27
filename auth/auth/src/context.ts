import { inferAsyncReturnType } from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';
import { WithAuthContainer } from './auth/procedures/withAuthContainer.procedure';

export type LunaContext = WithAuthContainer & inferAsyncReturnType<typeof createContext>;

export const createContext = async ({ req, res }: trpcExpress.CreateExpressContextOptions) => {
  const getAuthorizationToken = () => {
    const token = req.headers.authorization?.split(' ')[1];
    return token;
  }

  return {
    getAuthorizationToken
  }
}
