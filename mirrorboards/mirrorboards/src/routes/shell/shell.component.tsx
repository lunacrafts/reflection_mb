import { Outlet } from "@tanstack/react-router"
import React from "react"
import { narnia } from "../../narnia";

export const ShellComponent = () => {
  React.useEffect(() => {
    console.log('shell!');

    narnia.openai.social.generateMarketingPersonas.query({
      count: 1,
    }).then((res) => {
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
