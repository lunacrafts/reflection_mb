import React from "react";
import { useStore } from "zustand";

import { useCraftLayoutStore } from "../useCraftLayoutStore/useCraftLayoutStore";
import { useBreakpoints, BreakpointsMatrix } from "@reflection/use-breakpoints";

export type SlotPayload = {
  breakpoints: BreakpointsMatrix;
};

export const useSlot = (namespace: string, slot: SlotPayload) => {
  const store = useCraftLayoutStore();
  const { register, unregister, update } = useStore(store, (state) => state.slots.actions);

  const breakpoints = useBreakpoints(slot.breakpoints);

  React.useEffect(() => {
    register(namespace, { breakpoints });

    return () => unregister(namespace);
  }, []);

  React.useEffect(() => {
    update(namespace, { breakpoints });
  }, [breakpoints]);

  return null;
};
