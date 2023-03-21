import React from "react";
import { useCommandsStore } from "../useCommandsStore/useCommandsStore";

export const useCommandsMount = () => {
  const context = useCommandsStore();

  const id = React.useId();

  const push = (render: () => JSX.Element) => {
    context.commands.mount(id, render());

    return () => context.commands.unmount(id);
  }

  const pop = () => {
    context.commands.unmount(id);
  }

  return { push, pop }
};
