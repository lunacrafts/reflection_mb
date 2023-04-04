import { Route } from "@tanstack/react-router";
import { mirrorboardRoute } from "../../../routes/shell/mirrorboard/mirrorboard.route";
import { HypeboardsComponent } from "./hypeboards.component";

const hypeboardsRoute = new Route({
  getParentRoute: () => mirrorboardRoute,
  path: '/hypeboards',
  component: HypeboardsComponent,
});

export { hypeboardsRoute }
