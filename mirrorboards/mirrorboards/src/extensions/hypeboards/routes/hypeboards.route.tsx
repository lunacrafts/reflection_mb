import { Route } from "@tanstack/react-router";
import { mirrorboardRoute } from "../../../routes/shell/mirrorboard/mirrorboard.route";
import { HypeboardsComponent } from "./hypeboards.component";
import { sourcesRoute } from "./sources/sources.route";
import { indexRoute } from "./index/index.route";

const hypeboardsRoute = new Route({
  getParentRoute: () => mirrorboardRoute,
  path: '/hypeboards',
  component: HypeboardsComponent,
});

hypeboardsRoute.addChildren([indexRoute, sourcesRoute]);

export { hypeboardsRoute }
