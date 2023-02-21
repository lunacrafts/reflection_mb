import { Outlet } from "@tanstack/react-router"
import React from "react"
import { narnia } from "../../narnia";

narnia.auth.login.mutate({
  email: 'lunacrafts@protonmail.com',
  password: 'crafts'
});

narnia.mirrorboards.mirrorboards.findAll.query().then((res) => {
  console.log('res');
  console.log(res);
})

export const ShellComponent = () => {
  return <div>
    Mirrorboards Shell
    <div style={{ border: '1px solid black' }}>
      <Outlet />
    </div>
  </div>
}
