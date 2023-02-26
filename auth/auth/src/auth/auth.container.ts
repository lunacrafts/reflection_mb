import { container, inject, registry, singleton } from "tsyringe";
import { envs } from "../envs";
import { AuthModels } from "./auth.models";
import { AuthDatabase } from "./auth.database";
import { AuthServices } from "./auth.services";

@registry(
  [
    {
      token: AuthDatabase,
      useFactory: () => {
        return new AuthDatabase(envs.AUTH_MONGODB_URI, envs.AUTH_MONGODB_DB_NAME);
      }
    },
    {
      token: AuthServices,
      useClass: AuthServices,
    },
    {
      token: AuthModels,
      useClass: AuthModels,
    }
  ]
)
@singleton()
export class AuthContainer {
  constructor(
    @inject(AuthDatabase) public readonly db: AuthDatabase,
    @inject(AuthServices) public readonly services: AuthServices,
    @inject(AuthModels) public readonly models: AuthModels,
  ) { }

  async _initialize() {
    await this.db.connect();
  }
}

container.register<AuthContainer>("AuthContainer", { useClass: AuthContainer });
