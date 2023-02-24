import { createTRPCProxyClient, httpLink } from "@trpc/client";
import superjson from 'superjson';
import { envs } from "./envs";
import type { NarniaRouter } from "narnia-trpc";

export const narniaTrpc = createTRPCProxyClient<NarniaRouter>({
  transformer: superjson,
  links: [
    httpLink({
      url: envs.VITE_NARNIA_TRPC,
      fetch(url, options) {
        return fetch(url, { ...options, credentials: "include" });
      },
    }),
  ],
});
