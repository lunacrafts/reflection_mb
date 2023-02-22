import { LunaRouter } from 'luna/src/router';
import { createTRPCProxyClient, httpLink } from '@trpc/client';
import superjson from 'superjson';

export const lunaClient = createTRPCProxyClient<LunaRouter>({
  transformer: superjson,
  links: [
    httpLink({
      url: 'http://localhost:4000/api/trpc'
    }),
  ],
});
