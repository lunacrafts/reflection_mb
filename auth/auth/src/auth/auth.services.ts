import { inject, registry, singleton } from "tsyringe";
import { UsersService } from "./services/users.service";

@registry(
  [
    {
      token: UsersService,
      useClass: UsersService
    }
  ]
)
@singleton()
export class AuthServices {
  constructor(
    @inject(UsersService) public readonly users: UsersService
  ) { }
}
