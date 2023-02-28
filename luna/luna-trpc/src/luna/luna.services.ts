import { inject, registry, singleton } from "tsyringe";
import { AuthService } from "./services/auth.service";
import { MirrorboardsService } from "./services/mirrorboards.service";
import { UsersService } from "./services/users.service";

@registry(
  [
    {
      token: AuthService,
      useClass: AuthService,
    },
    {
      token: MirrorboardsService,
      useClass: MirrorboardsService,
    },
    {
      token: UsersService,
      useClass: UsersService
    }
  ]
)
@singleton()
export class LunaServices {
  constructor(
    @inject(AuthService) public readonly auth: AuthService,
    @inject(MirrorboardsService) public readonly mirrorboards: MirrorboardsService,
    @inject(UsersService) public readonly users: UsersService,
  ) { }
}
