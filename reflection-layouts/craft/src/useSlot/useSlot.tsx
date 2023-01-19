import React from "react";
import { useStore } from "zustand";
import { CraftLayoutContext } from "../CraftLayoutProvider/CraftLayoutProvider";
import { Slot } from "../types";

export const useSlot = (namespace: string, slot: Slot) => {
  const store = React.useContext(CraftLayoutContext);
  const { register, unregister } = useStore(store, (state) => state.slots.actions);

  React.useEffect(() => {
    register(namespace, slot);

    return () => unregister(namespace);
  }, []);
};
