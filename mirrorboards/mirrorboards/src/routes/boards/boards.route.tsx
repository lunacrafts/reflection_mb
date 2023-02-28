import { MirrorboardsLayoutKeyboardSupport, MirrorboardsLayoutProvider } from "@reflection-layouts/mirrorboards";
import { Route } from "@tanstack/react-router";
import { rootRoute } from "../root.route";
import { BoardsComponent } from "./boards.component";

export const boardsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/boards',
  component: () => (
    <MirrorboardsLayoutProvider>
      <MirrorboardsLayoutKeyboardSupport>
        <BoardsComponent />
      </MirrorboardsLayoutKeyboardSupport>
    </MirrorboardsLayoutProvider>
  )
});
