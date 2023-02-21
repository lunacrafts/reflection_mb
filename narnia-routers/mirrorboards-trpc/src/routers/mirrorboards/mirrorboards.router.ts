import t from "../../trpc";
import { findAll } from "./findAll";
import { findOne } from "./findOne";

export const router = t.mergeRouters(findAll, findOne);
