import { createTRPCProxyClient, httpLink } from "@trpc/client";
import { env } from "env";
import type { LunaRouter } from 'luna/src/router';
import superjson from 'superjson';

export const lunaClient = createTRPCProxyClient<LunaRouter>({
  transformer: superjson,
  links: [
    httpLink({
      url: env.LUNA_TRPC_URL
    }),
  ],
});


export const getLunaClient = () => {
  return createTRPCProxyClient<LunaRouter>({
    transformer: superjson,
    links: [
      httpLink({
        url: env.LUNA_TRPC_URL
      }),
    ],
  });
}
