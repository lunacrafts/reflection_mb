import { createTRPCProxyClient, httpLink } from "@trpc/client";
import { envs } from "./envs";
import { LunaRouter } from "./router";

export const lunaClient = createTRPCProxyClient<LunaRouter>({
  links: [
    httpLink({
      url: envs.LUNA_TRPC
    }),
  ],
});
