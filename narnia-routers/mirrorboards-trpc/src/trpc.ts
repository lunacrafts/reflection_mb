import { initTRPC } from "@trpc/server";
import { NarniaContext } from "narnia-trpc-context";
import { OpenApiMeta } from 'trpc-openapi';
import { WithMirrorboards } from "./mirrorboards/withMirrorboards.procedure";

export type NarniaWithMirrorboardsContext = NarniaContext & WithMirrorboards;

export const t = initTRPC.meta<OpenApiMeta>().context<NarniaWithMirrorboardsContext>().create();
export default t;
