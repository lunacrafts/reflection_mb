import { Outlet } from "@tanstack/react-router"
import { narniaTrpc } from "../../narniaTrpc";
import { narnia } from "../../trpc/narnia.trpc";


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
  // const { data } = narnia.openai.social.generateMarketingPersonas

  return <div>
    Mirrorboards Shell
    <div style={{ border: '1px solid black' }}>
      <Outlet />
    </div>
  </div>
}
