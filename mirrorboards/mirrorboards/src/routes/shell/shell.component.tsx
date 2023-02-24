import { Outlet } from "@tanstack/react-router"
import { narnia } from "narnia-react"
import { narniaTrpc } from "../../narniaTrpc";


narniaTrpc.auth.me.query().then((res) => {
  console.log(res);
});

// narnia.auth.login.mutate({
//   email: 'lunacrafts@protonmail.com',
//   password: 'crafts'
// });

// narnia.mirrorboards.mirrorboards.findAll.query().then((res) => {
//   console.log('res');
//   console.log(res);
// })

export const ShellComponent = () => {
  const { data } = narnia.mirrorboards.findAll.useQuery();

  return <div>
    Mirrorboards Shell
    <div style={{ border: '1px solid black' }}>
      <Outlet />
    </div>
  </div>
}
