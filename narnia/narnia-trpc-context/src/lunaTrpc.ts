import { createTRPCProxyClient, HTTPHeaders, httpLink } from "@trpc/client";
import type { LunaRouter } from 'luna/src/router';
import superjson from 'superjson';

interface GetLunaTrpc {
  headers?: HTTPHeaders
}

export const getLunaTrpc = ({ headers }: GetLunaTrpc) => {
  return createTRPCProxyClient<LunaRouter>({
    transformer: superjson,
    links: [
      httpLink({
        url: 'http://localhost:4000/api/trpc',
        headers: headers ? () => headers : undefined,
        fetch(url, options) {
          return fetch(url, { ...options, credentials: "include" });
        },
      }),
    ],
  });
}
