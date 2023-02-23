import { createTRPCProxyClient, httpLink } from "@trpc/react-query";
import superjson from 'superjson';
import type { NarniaRouter } from "narnia-trpc";
import envs from "./envs";

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
