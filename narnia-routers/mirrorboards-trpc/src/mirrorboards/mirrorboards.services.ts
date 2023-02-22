import { inject, registry, singleton } from "tsyringe";
import { MirrorboardsService } from "./services/mirrorboards.service";

@registry(
  [
    {
      token: MirrorboardsService,
      useClass: MirrorboardsService
    }
  ]
)
@singleton()
export class LunaServices {
  constructor(
    @inject(MirrorboardsService) public readonly mirrorboards: MirrorboardsService,
  ) { }
}
