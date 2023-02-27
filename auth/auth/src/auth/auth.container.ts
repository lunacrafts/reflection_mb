import { container, inject, registry, singleton } from "tsyringe";
import { AuthModels } from "./auth.models";
import { AuthDatabase } from "./auth.database";
import { AuthServices } from "./auth.services";
import { env } from "env";

@registry(
  [
    {
      token: AuthDatabase,
      useFactory: () => {
        return new AuthDatabase(env.AUTH_MONGODB_URI, env.AUTH_MONGODB_DB_NAME);
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
