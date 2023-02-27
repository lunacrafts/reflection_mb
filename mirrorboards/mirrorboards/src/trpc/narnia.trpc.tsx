import React, { PropsWithChildren } from "react";
import { env } from "env";
import { QueryClient } from "@tanstack/react-query";
import { createTRPCReact, httpLink } from "@trpc/react-query";
import superjson from 'superjson';
import { NarniaRouter } from "narnia-trpc";
import { createTRPCProxyClient } from "@trpc/client";

export const narnia = createTRPCReact<NarniaRouter>();

export const narniaClient = createTRPCProxyClient<NarniaRouter>({
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

export const NarniaProvider: React.FC<PropsWithChildren> = (props) => {
  const [trpcClient] = React.useState(() => {
    return narnia.createClient({
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

  return <narnia.Provider queryClient={queryClient} client={trpcClient}>
    {props.children}
  </narnia.Provider>
}

