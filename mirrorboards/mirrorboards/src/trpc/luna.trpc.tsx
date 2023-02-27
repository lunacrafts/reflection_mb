import React, { PropsWithChildren } from "react";
import { env } from "env";
import { QueryClient } from "@tanstack/react-query";
import { createTRPCReact, httpLink } from "@trpc/react-query";
import superjson from 'superjson';
import type { LunaRouter } from "luna/src/router";
import { createTRPCProxyClient } from "@trpc/client";

export const luna = createTRPCReact<LunaRouter>();

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

export const LunaProvider: React.FC<PropsWithChildren> = (props) => {
  const [trpcClient] = React.useState(() => {
    return luna.createClient({
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
  });

  const [queryClient] = React.useState(() => {
    return new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
        },
      },
    })
  });

  return <luna.Provider queryClient={queryClient} client={trpcClient} >
    {props.children}
  </luna.Provider>
}

