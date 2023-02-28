import { Route } from "@tanstack/react-router";
import { hypeboardsRoute } from "../mirrorboards.route";
import { HypeboardsSourcesComponent } from "./sources.component";

export const sourcesRoute = new Route({
  getParentRoute: () => hypeboardsRoute,
  path: '/sources',
  component: HypeboardsSourcesComponent
})
