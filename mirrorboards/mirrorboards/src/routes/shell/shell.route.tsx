import { ShellLayoutKeyboardSupport, ShellLayoutProvider } from "@reflection-layouts/shell";
import { Route } from "@tanstack/react-router";
import { rootRoute } from "../root.route";
import { ShellComponent } from "./shell.component";

export const shellRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/shell',
  component: () => (
    <ShellLayoutProvider>
      <ShellLayoutKeyboardSupport>
        <ShellComponent />
      </ShellLayoutKeyboardSupport>
    </ShellLayoutProvider>
  )
});
