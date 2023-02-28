import { MirrorboardsLayoutKeyboardSupport, MirrorboardsLayoutProvider } from "@reflection-layouts/mirrorboards";
import { Route } from "@tanstack/react-router";
import { MirrorboardsShellMantineProvider } from "mirrorboards-shell";
import { rootRoute } from "../root.route";
import { ShellComponent } from "./shell.component";

export const shellRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/shell',
  component: () => (
    <MirrorboardsShellMantineProvider>
      <MirrorboardsLayoutProvider>
        <MirrorboardsLayoutKeyboardSupport>
          <ShellComponent />
        </MirrorboardsLayoutKeyboardSupport>
      </MirrorboardsLayoutProvider>
    </MirrorboardsShellMantineProvider>
  )
});
