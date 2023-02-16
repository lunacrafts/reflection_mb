import { t } from "../trpc";
import { auth } from "./auth";

export const router = t.router({ auth });

export type AppRouter = typeof router;
