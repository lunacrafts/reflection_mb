import { Outlet } from "@tanstack/react-router";

export const HypeboardsComponent = () => {
  return <div style={{ height: '100%', backgroundColor: '#181818' }}>
    Hypeboards Root!
    <Outlet />
  </div>
}
