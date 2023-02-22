import t from "../../trpc";
import { create } from "./create.procedure";
import { findAll } from "./findAll";
import { findOne } from "./findOne";

export const router = t.mergeRouters(findAll, findOne, create);
