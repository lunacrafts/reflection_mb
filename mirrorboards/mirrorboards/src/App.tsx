import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NarniaProvider } from "narnia-react";
import { env } from "./envs";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "./router";

export const App: React.FC = () => {
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
    <NarniaProvider url={env.VITE_NARNIA_TRPC} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </NarniaProvider>
  );
}
