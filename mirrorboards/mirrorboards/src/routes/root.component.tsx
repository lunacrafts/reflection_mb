import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "@tanstack/react-router";
import { NarniaProvider } from "narnia-react";
import envs from "../envs";

export const RootComponent: React.FC = () => {
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
    <NarniaProvider url={envs.VITE_NARNIA_TRPC} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </NarniaProvider>
  );
}
