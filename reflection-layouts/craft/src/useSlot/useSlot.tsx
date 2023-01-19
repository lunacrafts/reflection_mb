import React from "react";
import { useStore } from "zustand";
import { Slot } from "../types";
import { useCraftLayoutStore } from "../useCraftLayoutStore/useCraftLayoutStore";

export const useSlot = (namespace: string, slot: Slot) => {
  const store = useCraftLayoutStore();
  const { register, unregister } = useStore(store, (state) => state.slots.actions);

  React.useEffect(() => {
    register(namespace, slot);

    return () => unregister(namespace);
  }, []);
};
