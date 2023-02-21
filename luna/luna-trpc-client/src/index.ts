import { createTRPCProxyClient, httpLink } from "@trpc/client";
import type { LunaRouter } from 'luna/src/router';

export const lunaClient = createTRPCProxyClient<LunaRouter>({
  links: [
    httpLink({
      url: 'http://localhost:4000/api/trpc'
    }),
  ],
});
