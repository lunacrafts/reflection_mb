import { Outlet } from "@tanstack/react-router"
import { MirrorboardsShellMantineProvider } from "mirrorboards-shell"

export const ShellComponent = () => {
  return <MirrorboardsShellMantineProvider>
    Mirrorboards Shell
    <div style={{ border: '1px solid black' }}>
      <Outlet />
    </div>
  </MirrorboardsShellMantineProvider>
}
