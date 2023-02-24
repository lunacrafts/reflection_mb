import { inject, registry, singleton } from "tsyringe";
import { AuthService } from "./services/auth.service";
import { UsersService } from "./services/users.service";

@registry(
  [
    {
      token: AuthService,
      useClass: AuthService,
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
    @inject(UsersService) public readonly users: UsersService
  ) { }
}
