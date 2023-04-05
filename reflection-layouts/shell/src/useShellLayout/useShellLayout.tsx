import React from "react";
import { useStore } from "zustand";
import { ShellLayoutContext } from "../ShellLayoutProvider/ShellLayoutProvider";

export const useShellLayout = () => {
  const store = React.useContext(ShellLayoutContext);
  const drawer = useStore(store, (state) => state.drawer);

  return { drawer };
};
