import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HypeboardsCore from "hypeboards-core";
import { MirrorboardsShell, MirrorboardsShellMantineProvider } from "mirrorboards-shell";
import { NarniaProvider } from "narnia-react";
import React from "react";
import { env } from "./env";

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
        <MirrorboardsShellMantineProvider>
          <MirrorboardsShell>
            <HypeboardsCore />
          </MirrorboardsShell>
        </MirrorboardsShellMantineProvider>
      </QueryClientProvider>
    </NarniaProvider>
  );
}

export default App;
