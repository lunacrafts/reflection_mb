import { Luna } from "luna-sdk";
import { OptionalId } from "mongodb";

export type User = Omit<Luna.User, 'id'> & {
  password: String
}
