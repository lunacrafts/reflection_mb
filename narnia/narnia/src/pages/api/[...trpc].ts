import "reflect-metadata"
import { NextApiRequest, NextApiResponse } from 'next';
import cors from 'nextjs-cors';
import { createOpenApiNextHandler } from 'trpc-openapi';
import { router } from 'narnia-trpc';
import { createContext } from 'narnia-trpc-context';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await cors(req, res);

  return createOpenApiNextHandler({
    router: router,
    createContext
  })(req, res);
};

export default handler;
