import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HypeboardsCore from "hypeboards-core";
import MirrorboardsCore from "mirrorboards-core";
import { MirrorboardsShell, MirrorboardsShellMantineProvider } from "mirrorboards-shell";
import { NarniaProvider } from "narnia-react";
import React from "react";
import { ExtensionProvider } from "@reflection/extension";
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
            <ExtensionProvider namespace={"mirrorboards.core"}>
              <MirrorboardsCore />
            </ExtensionProvider>
            <ExtensionProvider namespace={"hypeboards.core"}>
              <HypeboardsCore />
            </ExtensionProvider>
          </MirrorboardsShell>
        </MirrorboardsShellMantineProvider>
      </QueryClientProvider>
    </NarniaProvider>
  );
}

export default App;
