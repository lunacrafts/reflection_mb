import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "@tanstack/react-router";
import { NarniaProvider } from "narnia-react";
import SuperTokens, { SuperTokensWrapper } from "supertokens-auth-react";
import { env } from "env";

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
      <NarniaProvider url={env.NARNIA_TRPC_URL} queryClient={queryClient}>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </NarniaProvider>
    </SuperTokensWrapper>
  );
}
