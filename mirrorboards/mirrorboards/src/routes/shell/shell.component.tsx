import { ShellLayout } from "@reflection-layouts/shell"
import { Outlet } from "@tanstack/react-router"

export const ShellComponent = () => {
  return <ShellLayout>
    <Outlet />
  </ShellLayout>
}
