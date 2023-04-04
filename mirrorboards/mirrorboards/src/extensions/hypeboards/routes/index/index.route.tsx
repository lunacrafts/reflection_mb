import { Route } from "@tanstack/react-router";
import { hypeboardsRoute } from "../hypeboards.route";
import { HypeboardsIndexComponent } from "./index.component";
import { BoardLayoutProvider } from '@reflection-layouts/board';

export const hypeboardsIndexRoute = new Route({
  getParentRoute: () => hypeboardsRoute,
  path: '/',
  component: () => (
    <BoardLayoutProvider>
      <HypeboardsIndexComponent />
    </BoardLayoutProvider>
  )
})
