import { initTRPC } from "@trpc/server";
import { OpenApiMeta } from "trpc-openapi";
import { LunaContext } from "./context";

export const t = initTRPC
  .meta<OpenApiMeta>()
  .context<LunaContext>()
  .create();

