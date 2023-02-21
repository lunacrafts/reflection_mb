import t from "../../trpc";
import { findAll } from "./findAll";

export const router = t.mergeRouters(findAll);
