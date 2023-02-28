import { MirrorboardsLayout } from "@reflection-layouts/mirrorboards"
import { Outlet } from "@tanstack/react-router"

export const ShellComponent = () => {
  return <MirrorboardsLayout>
    <Outlet />
  </MirrorboardsLayout>
}
