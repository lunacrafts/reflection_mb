import { ShellLayout } from "@reflection-layouts/mirrorboards"
import { Outlet } from "@tanstack/react-router"

export const ShellComponent = () => {
  return <ShellLayout>
    <Outlet />
  </ShellLayout>
}
