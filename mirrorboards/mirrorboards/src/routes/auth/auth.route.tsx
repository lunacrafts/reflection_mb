import { Route } from "@tanstack/react-router";
import { rootRoute } from "../root.route";
import { AuthComponent } from "./auth.component";

export const authRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/auth',
  component: AuthComponent
})
