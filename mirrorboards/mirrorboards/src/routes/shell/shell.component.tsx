import { Outlet } from "@tanstack/react-router"
import { narnia } from "narnia-react"
import { narniaTrpc } from "../../narnia"

narniaTrpc.auth.me.query().then((res) => {
  console.log(res);
});

export const ShellComponent = () => {
  const { data } = narnia.mirrorboards.mirrorboards.findAll.useQuery();

  return <div>
    Mirrorboards Shell
    <div style={{ border: '1px solid black' }}>
      <Outlet />
    </div>
  </div>
}
