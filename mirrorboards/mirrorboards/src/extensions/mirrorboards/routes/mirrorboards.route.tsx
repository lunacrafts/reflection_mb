import { Route } from "@tanstack/react-router";
import { mirrorboardRoute } from "../../../routes/shell/mirrorboard/mirrorboard.route";
import { HypeboardsComponent } from "./mirrorboards.component";
import { sourcesRoute } from "./sources/sources.route";

const hypeboardsRoute = new Route({
  getParentRoute: () => mirrorboardRoute,
  path: '/hypeboards',
  component: HypeboardsComponent,
});

hypeboardsRoute.addChildren([sourcesRoute]);

export { hypeboardsRoute }
