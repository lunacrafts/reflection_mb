import { useParams } from "@tanstack/react-router"
import { narnia } from "narnia-react";
import { mirrorboardRoute } from "./mirrorboard.route";

export const MirrorboardComponent = () => {
  const { mirrorboardId } = useParams({
    from: mirrorboardRoute.id,
  });

  const { data } = narnia.mirrorboards.mirrorboards.findOne.useQuery({
    id: mirrorboardId
  });

  const login = narnia.auth.login.useMutation();
  const register = narnia.auth.register.useMutation();

  return <div>
    Mirrorboard {mirrorboardId}{JSON.stringify(data?.mirrorboard)}

    <div onClick={() => login.mutate({
      email: 'lunacrafts@protonmail.com',
      password: 'crafts'
    })}>login as luna@protonmail.com</div>

    <div onClick={() => register.mutate({
      email: 'lunacrafts@protonmail.com',
      password: 'crafts',
      repeatPassword: 'crafts'
    })}>register as luna@protonmail.com@crafts</div>
  </div>
}
