import { createTRPCProxyClient, httpLink } from "@trpc/react-query";
import type { NarniaRouter } from "narnia-trpc";

interface GetNarniaClientProps {
  url: string;
}

export const getNarniaClient = (params: GetNarniaClientProps) => {
  return createTRPCProxyClient<NarniaRouter>({
    links: [
      httpLink({
        url: params.url,
        fetch(url, options) {
          return fetch(url, { ...options, credentials: "include" });
        },
      }),
    ],
  });
}
