import { inject, registry, singleton } from "tsyringe";
import { AuthService } from "./services/auth.service";

@registry(
  [
    {
      token: AuthService,
      useClass: AuthService,
    }
  ]
)
@singleton()
export class LunaServices {
  constructor(
    @inject(AuthService) public readonly auth: AuthService,
  ) { }
}
