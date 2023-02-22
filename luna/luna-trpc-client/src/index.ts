import { createTRPCProxyClient, httpLink } from "@trpc/client";
import type { LunaRouter } from 'luna/src/router';
import superjson from 'superjson';

export const lunaClient = createTRPCProxyClient<LunaRouter>({
  transformer: superjson,
  links: [
    httpLink({
      url: 'http://localhost:4000/api/trpc'
    }),
  ],
});


export const getLunaClient = () => {
  return createTRPCProxyClient<LunaRouter>({
    transformer: superjson,
    links: [
      httpLink({
        url: 'http://localhost:4000/api/trpc'
      }),
    ],
  });
}
