import { t } from "../../../trpc";
import { login } from "./procedures/login.procedure";
import { me } from "./procedures/me.procedure";
import { register } from "./procedures/register.procedure";

export const router = t.mergeRouters(login, me, register);
