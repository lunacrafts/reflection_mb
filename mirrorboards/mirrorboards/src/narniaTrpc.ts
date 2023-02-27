import { createTRPCProxyClient, httpLink } from "@trpc/client";
import superjson from 'superjson';
import { env } from "env";
import type { NarniaRouter } from "narnia-trpc";

export const narniaTrpc = createTRPCProxyClient<NarniaRouter>({
  transformer: superjson,
  links: [
    httpLink({
      url: env.NARNIA_TRPC_URL,
      fetch(url, options) {
        return fetch(url, { ...options, credentials: "include" });
      },
    }),
  ],
});
