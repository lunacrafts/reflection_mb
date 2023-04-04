import { Route } from "@tanstack/react-router";
import { hypeboardsRoute } from "../hypeboards.route";
import { HypeboardsIndexComponent } from "./index.component";

export const indexRoute = new Route({
  getParentRoute: () => hypeboardsRoute,
  path: '/',
  component: HypeboardsIndexComponent
})
