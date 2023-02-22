import "reflect-metadata"
import { NextApiRequest, NextApiResponse } from "next";
import * as trpcNext from "@trpc/server/adapters/next";
import NextCors from "nextjs-cors";
import { router } from 'narnia-trpc';
import { createContext } from 'narnia-trpc-context';

export default async function (req: NextApiRequest, res: NextApiResponse) {
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
    exposedHeaders: ['Set-Cookie'],
    credentials: true
  });

  return trpcNext.createNextApiHandler({
    router: router,
    createContext: async () => await createContext({ req, res })
  })(req, res);
}
