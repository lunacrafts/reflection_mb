import { Outlet } from "@tanstack/react-router"
import { narnia, narniaClient } from "../../trpc/narnia.trpc";
import { luna, lunaClient } from "../../trpc/luna.trpc";

// narniaClient.auth.me.query().then((res) => {
//   console.log(res);
// });

// lunaClient.authenticators.fetchAuthenticators.query({
//   authenticators: 'facebook',
//   token: '123'
// })

// narnia.auth.login.mutate({
//   email: 'lunacrafts@protonmail.com',
//   password: 'crafts'
// });

// narniaClient.openai.social.generateMarketingPersonas.query({
//   count: 1
// }).then((res) => {
//   console.log('narniaClient.openai.social.generateMarketingPersonas');
//   console.log(res);
// });

export const ShellComponent = () => {
  const { data } = luna.authenticators.fetchAuthenticators.useQuery({
    authenticators: 'facebook',
    token: '123'
  });

  return <div>
    Mirrorboards Shell <div>{JSON.stringify(data)}</div>
    <div style={{ border: '1px solid black' }}>
      <Outlet />
    </div>
  </div>
}
