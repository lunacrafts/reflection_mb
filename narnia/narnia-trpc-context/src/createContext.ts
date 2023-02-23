import { inferAsyncReturnType, TRPCError } from "@trpc/server";
import type { CreateNextContextOptions } from '@trpc/server/adapters/next';
import cookie from 'cookie';
import { getLunaTrpc } from "./lunaTrpc";

export const createContext = async (opts: CreateNextContextOptions) => {
  const lunaTrpc = getLunaTrpc({
    headers: {
      'Authorization': 'Bearer ' + opts.req.cookies['sAccessToken'],
    }
  });

  const access_token = opts.req.cookies['access_token'] ? opts.req.cookies['access_token'] : null;

  return {
    setAccessToken: async (access_token: string) => {
      const setCookie = cookie.serialize('access_token', access_token, {
        secure: false,
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
      });

      opts.res.setHeader('Set-Cookie', setCookie);
    },
    fetchCurrentUser: async () => {
      // if (access_token) {
      //   try {
      //     const { currentUser } = await lunaClient.auth.me.query({ access_token });
      //     return { currentUser }
      //   } catch (e) {
      //     return { currentUser: null }
      //   }
      // }

      lunaTrpc.session.me.query({
        access_token: 'foo'
      }).then((res) => {
        console.log('lunaTrpc session me res');
      });

      return { currentUser: null }
    },
    fetchAuthenticator: async ({ authenticator }: { authenticator: string }) => {
      // const res = await lunaClient.authenticators.fetchAuthenticator.query({ token: '123', authenticator });

      // return res;
    },
    fetchAuthenticators: async ({ authenticators }: { authenticators: string[] }) => {
      // return await lunaClient.authenticators.fetchAuthenticators.query({ token: '123', authenticators });
    }
  }
}
