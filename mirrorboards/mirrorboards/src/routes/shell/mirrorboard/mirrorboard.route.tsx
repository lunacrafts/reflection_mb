import { Route } from "@tanstack/react-router";
import { shellRoute } from "../shell.route";
import { MirrorboardComponent } from "./mirrorboard.component";

export const mirrorboardRoute = new Route({
  getParentRoute: () => shellRoute,
  path: '/mirrorboard/$mirrorboardId',
  component: MirrorboardComponent,
})
