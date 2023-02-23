import { inferAsyncReturnType, TRPCError } from "@trpc/server";
import type { CreateNextContextOptions } from '@trpc/server/adapters/next';
import cookie from 'cookie';
import { getLunaTrpc } from "./lunaTrpc";

import { superTokensNextWrapper } from 'supertokens-node/nextjs'
import Session from "supertokens-node/recipe/session";
import { SessionRequest } from "supertokens-node/framework/express";
import JsonWebToken, { JwtHeader, SigningKeyCallback } from 'jsonwebtoken';
import jwksClient from 'jwks-rsa';


var client = jwksClient({
  jwksUri: 'http://localhost:3567/recipe/jwt/jwks'
});

function getKey(header: JwtHeader, callback: SigningKeyCallback) {
  client.getSigningKey(header.kid, function (err, key) {
    var signingKey = key!.getPublicKey();

    console.log('signingn key');
    console.log(signingKey);

    callback(err, signingKey);
  });
}

export const createContext = async (opts: CreateNextContextOptions) => {
  console.log('create narna context');
  console.log(opts.req.cookies);

  const lunaTrpc = getLunaTrpc({
    headers: {
      'Authorization': 'Bearer ' + opts.req.cookies['st-access-token'],
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

      const jwtToken = opts.req.cookies['st-access-token'];

      console.log('decoding');
      console.log(jwtToken);

      if (jwtToken) {
        JsonWebToken.verify(jwtToken, getKey, {}, function (err: any, decoded: any) {
          let decodedJWT = decoded;

          console.log('DECODED JWYT!!!');
          console.log(decodedJWT);

          console.log('err');
          console.log(err);

          if (decodedJWT === undefined || typeof decodedJWT === "string" || decodedJWT.source === undefined || decodedJWT.source !== "microservice") {
            // return a 401 unauthorised error
          } else {
            // handle API request...
          }
        });
      }


      // if (access_token) {
      //   try {
      //     const { currentUser } = await lunaClient.auth.me.query({ access_token });
      //     return { currentUser }
      //   } catch (e) {
      //     return { currentUser: null }
      //   }
      // }

      // let session = await superTokensNextWrapper(
      //   async (next) => {
      //     return await Session.getSession(opts.req, opts.res);
      //   },
      //   opts.req,
      //   opts.res
      // )

      // const userId = session.getUserId();
      // console.log(userId);




      // lunaTrpc.session.me.query({
      //   access_token: 'foo'
      // }).then((res) => {
      //   console.log('lunaTrpc session me res');
      //   console.log(res);
      // });

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
