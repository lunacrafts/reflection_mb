import { Route } from "@tanstack/react-router";
import { rootRoute } from "../root.route";
import { IndexComponent } from "./index.component";

export const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: IndexComponent
})
