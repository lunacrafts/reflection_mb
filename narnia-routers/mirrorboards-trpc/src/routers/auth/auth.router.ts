import t from "../../trpc";
import { login } from "./login";

export const router = t.mergeRouters(login);
