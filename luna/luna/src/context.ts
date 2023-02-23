import { inferAsyncReturnType } from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';
import { WithLuna } from "./luna/procedures/withLuna.procedure";
import { WithSession } from "./luna/procedures/withSession.procedure";
import Session from "supertokens-node/recipe/session";

export type LunaContext = WithLuna & WithSession & inferAsyncReturnType<typeof createContext>;

export const createContext = async ({ req, res }: trpcExpress.CreateExpressContextOptions) => {
  const getSession = async () => {
    const session = await Session.getSession(req, res, {
      sessionRequired: false,
    });

    if (session) {
      return {
        id: session.getUserId(),
      }
    }

    return null;
  }

  return { getSession }
}
