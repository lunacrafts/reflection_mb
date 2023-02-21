import { Outlet } from "@tanstack/react-router"
import React from "react"
import { narnia } from "../../narnia";

export const ShellComponent = () => {
  React.useEffect(() => {
    narnia.auth.login.mutate({
      email: 'lunacrafts@protonmail.com',
      password: 'crafts'
    });

    narnia.mirrorboards.mirrorboards.findAll.query().then((res) => {
      console.log('res');
      console.log(res);
    })
  }, []);

  return <div>
    Mirrorboards Shell
    <div style={{ border: '1px solid black' }}>
      <Outlet />
    </div>
  </div>
}
