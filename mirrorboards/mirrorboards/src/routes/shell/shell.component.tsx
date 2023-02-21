import { Outlet } from "@tanstack/react-router"

export const ShellComponent = () => {
  return <div>Mirrorboards Shell
    <div style={{ border: '1px solid black' }}>
      outlet <Outlet />
    </div>
  </div>
}
