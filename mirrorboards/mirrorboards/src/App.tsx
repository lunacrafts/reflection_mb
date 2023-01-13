import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MirrorboardsShell, MirrorboardsShellMantineProvider } from "mirrorboards-shell";
import { NarniaProvider } from "narnia-react";
import React from "react";
import { env } from "./env";

import { extension } from "mirrorboards-core";
import { ReflectionExtensionProvider } from "@reflection/extension";

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
            <ReflectionExtensionProvider extension={extension}>{extension.component}</ReflectionExtensionProvider>
            {/* <ExtensionProvider namespace={"mirrorboards.core"}>
              <MirrorboardsCore />
            </ExtensionProvider>
            <ExtensionProvider namespace={"hypeboards.core"}>
              <HypeboardsCore />
            </ExtensionProvider> */}
          </MirrorboardsShell>
        </MirrorboardsShellMantineProvider>
      </QueryClientProvider>
    </NarniaProvider>
  );
}

export default App;
