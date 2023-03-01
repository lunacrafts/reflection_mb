import React, { createContext, PropsWithChildren } from "react";
import { env } from "env";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createTRPCReact, httpLink } from "@trpc/react-query";
import superjson from 'superjson';
import type { LunaRouter } from "luna-trpc";
import { createTRPCProxyClient } from "@trpc/client";

export const lunaClient = createTRPCProxyClient<LunaRouter>({
  transformer: superjson,
  links: [
    httpLink({
      url: env.LUNA_TRPC_URL,
      fetch(url, options) {
        return fetch(url, { ...options, credentials: "include" });
      },
    }),
  ],
});

const reactQueryContext = createContext<QueryClient | undefined>(undefined);

export const luna = createTRPCReact<LunaRouter>({
  context: createContext(null),
  reactQueryContext
});

const lunaReactClient = luna.createClient({
  transformer: superjson,
  links: [
    httpLink({
      url: env.LUNA_TRPC_URL,
      fetch(url, options) {
        return fetch(url, { ...options, credentials: "include" });
      },
    }),
  ],
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
})

export const LunaProvider: React.FC<PropsWithChildren> = (props) => {
  return <luna.Provider queryClient={queryClient} client={lunaReactClient}>
    <QueryClientProvider client={queryClient} context={reactQueryContext}>
      {props.children}
    </QueryClientProvider>
  </luna.Provider>
}

