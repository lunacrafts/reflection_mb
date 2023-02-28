import { Outlet } from "@tanstack/react-router"
import { MirrorboardsShellMantineProvider } from "mirrorboards-shell"

export const ShellComponent = () => {
  return <MirrorboardsShellMantineProvider>
    <div style={{ padding: 15, backgroundColor: '#343434', height: '100%' }}>
      <Outlet />
    </div>
  </MirrorboardsShellMantineProvider>
}
