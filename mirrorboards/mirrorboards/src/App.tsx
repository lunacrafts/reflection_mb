import { ReflectionLayout } from "@reflection-layouts/reflection";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NarniaProvider } from "narnia-react";
import React from "react";
import { env } from "./env";
import { MarketingPersonasList } from "./MarketingPersonasList";

function App() {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
          },
        },
      })
  );

  return (
    <NarniaProvider url={env.VITE_NARNIA_TRPC} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        Mirrorboards.
        <MarketingPersonasList />
      </QueryClientProvider>
    </NarniaProvider>
  );
}

export default App;
