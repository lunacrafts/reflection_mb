import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MirrorboardsShell, MirrorboardsShellMantineProvider } from "mirrorboards-shell";
import { NarniaProvider } from "narnia-react";
import React from "react";
import { env } from "./env";
import { ReflectionExtensionProvider } from "@reflection/extension";

import MirrorboardsCore from "mirrorboards-core";
import HypeboardsCore from "hypeboards-core";

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
            <ReflectionExtensionProvider extension={MirrorboardsCore} />
            <ReflectionExtensionProvider extension={HypeboardsCore} />
          </MirrorboardsShell>
        </MirrorboardsShellMantineProvider>
      </QueryClientProvider>
    </NarniaProvider>
  );
}

export default App;
