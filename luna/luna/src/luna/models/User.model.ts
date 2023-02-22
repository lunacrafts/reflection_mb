import { Luna } from "luna-sdk";
import { WithoutId } from "mongodb";

export type UserModel = WithoutId<Luna.User> & {
  encryptedPassword: string
}
