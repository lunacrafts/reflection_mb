import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "@tanstack/react-router";
import SuperTokens, { SuperTokensWrapper } from "supertokens-auth-react";
import { LunaProvider } from "../trpc/luna.trpc";
import { NarniaProvider } from "../trpc/narnia.trpc";

export const RootComponent: React.FC = () => {
  if (SuperTokens.canHandleRoute()) {
    return SuperTokens.getRoutingComponent();
  }

  const [queryClient] = React.useState(() => {
    return new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
        },
      },
    })
  });

  return (
    <SuperTokensWrapper>
      <NarniaProvider>

        <LunaProvider>
          <QueryClientProvider client={queryClient}>
            <Outlet />
          </QueryClientProvider>
        </LunaProvider>
      </NarniaProvider>

    </SuperTokensWrapper>
  );
}
