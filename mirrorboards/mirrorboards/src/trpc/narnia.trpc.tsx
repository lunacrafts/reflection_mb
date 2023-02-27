import { createContext, PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createTRPCProxyClient, createTRPCReact, httpLink } from "@trpc/react-query";
import { NarniaRouter } from "narnia-trpc";
import superjson from 'superjson';
import { env } from 'env';

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

const reactQueryContext = createContext<QueryClient | undefined>(undefined);

export const narnia = createTRPCReact<NarniaRouter>({
  context: createContext(null),
  reactQueryContext,
});

const narniaReactClient = narnia.createClient({
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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
})

export const NarniaProvider: React.FC<PropsWithChildren> = (props) => {
  return <narnia.Provider queryClient={queryClient} client={narniaReactClient}>
    <QueryClientProvider client={queryClient} context={reactQueryContext}>
      {props.children}
    </QueryClientProvider>
  </narnia.Provider>
}

