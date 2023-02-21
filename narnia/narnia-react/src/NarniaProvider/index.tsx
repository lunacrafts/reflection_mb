import { createTRPCReact, httpLink } from "@trpc/react-query";
import type { NarniaRouter } from "narnia-trpc";
import React, { PropsWithChildren } from "react";
import { QueryClient } from "@tanstack/react-query";

export const trpc = createTRPCReact<NarniaRouter>();

interface NarniaProviderProps {
  url: string;
  queryClient: QueryClient;
}

export const NarniaProvider: React.FC<PropsWithChildren<NarniaProviderProps>> = (props) => {
  const [trpcClient] = React.useState(() => {
    return trpc.createClient({
      links: [
        httpLink({
          url: props.url,
          fetch(url, options) {
            return fetch(url, { ...options, credentials: "include" });
          },
        }),
      ],
    });
  });

  return (
    <trpc.Provider client={trpcClient} queryClient={props.queryClient}>
      {props.children}
    </trpc.Provider>
  );
};
