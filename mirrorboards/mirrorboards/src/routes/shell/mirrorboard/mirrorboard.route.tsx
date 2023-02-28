import { ReflectionLayoutProvider } from "@reflection-layouts/reflection";
import { Route } from "@tanstack/react-router";
import { HypeboardsExtension } from "../../../extensions/hypeboards/extension/HypeboardsExtension";
import { MirrorboardsExtension } from "../../../extensions/mirrorboards/extension/MirrorboardsExtension";
import { shellRoute } from "../shell.route";
import { MirrorboardComponent } from "./mirrorboard.component";

export const mirrorboardRoute = new Route({
  getParentRoute: () => shellRoute,
  path: '/mirrorboard/$mirrorboardId',
  component: () => (
    <ReflectionLayoutProvider>
      <HypeboardsExtension />
      <MirrorboardsExtension />

      <MirrorboardComponent />
    </ReflectionLayoutProvider>
  ),
})
