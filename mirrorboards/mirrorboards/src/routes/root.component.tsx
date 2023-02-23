import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "@tanstack/react-router";
import { NarniaProvider } from "narnia-react";
import envs from "../envs";
import SuperTokens, { SuperTokensWrapper } from "supertokens-auth-react";

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
      <NarniaProvider url={envs.VITE_NARNIA_TRPC} queryClient={queryClient}>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </NarniaProvider>
    </SuperTokensWrapper>
  );
}
