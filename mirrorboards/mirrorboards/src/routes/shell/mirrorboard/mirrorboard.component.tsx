import { ReflectionLayout } from "@reflection-layouts/reflection";
import { Outlet } from "@tanstack/react-router";

export const MirrorboardComponent = () => {
  return <div style={{ height: '100%', backgroundColor: '#181818' }}>
    <ReflectionLayout>
      <Outlet />
    </ReflectionLayout>
  </div>
}
