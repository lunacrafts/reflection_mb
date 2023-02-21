import { Route } from "@tanstack/react-router";
import { rootRoute } from "../root.route";
import { mirrorboardRoute } from "./mirrorboard/mirrorboard.route";
import { ShellComponent } from "./shell.component";

export const shellRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/shell',
  component: ShellComponent
});

shellRoute.addChildren([mirrorboardRoute]);
