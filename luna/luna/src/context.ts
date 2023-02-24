import { inferAsyncReturnType } from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';
import { WithLuna } from "./luna/procedures/withLuna.procedure";
import { WithSession } from "./luna/procedures/withSession.procedure";
import { superTokensNextWrapper } from 'supertokens-node/nextjs'
import Session from "supertokens-node/recipe/session";
import { SessionRequest } from "supertokens-node/framework/express";

export type LunaContext = WithLuna & WithSession & inferAsyncReturnType<typeof createContext>;

export const createContext = async ({ req, res }: trpcExpress.CreateExpressContextOptions) => {
  const getAuthorizationToken = () => {
    const token = req.headers.authorization?.split(' ')[1];
    return token;
  }

  return {
    getAuthorizationToken
  }
}
