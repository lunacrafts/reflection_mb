import { defineAbility } from "@casl/ability";
import { Mirrorboard } from "../models/Mirrorboard.model";
import { User } from "../models/User.model";


export const defineAbilityForMirrorboardAndUser = (mirrorboard: Mirrorboard, user: User) => {
  return defineAbility((can, cannot) => {
    can('read', 'Mirrorboard');

    if (user.isSuperAdmin) {
      can('update', 'Mirrorboard', ['isPromoted']);
    }
  });
}
