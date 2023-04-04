import { Route } from "@tanstack/react-router";
import { hypeboardsRoute } from "../hypeboards.route";
import { HypeboardsSourcesComponent } from "./sources.component";
import { BoardLayoutProvider } from '@reflection-layouts/board';

export const hypeboardsSourcesRoute = new Route({
  getParentRoute: () => hypeboardsRoute,
  path: '/sources',
  component: () => (
    <BoardLayoutProvider>
      <HypeboardsSourcesComponent />
    </BoardLayoutProvider>
  )
})
