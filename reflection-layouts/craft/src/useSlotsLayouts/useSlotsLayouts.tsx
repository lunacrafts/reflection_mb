import React from "react";
import { useStore } from "zustand";
import { useCraftLayoutStore } from "../useCraftLayoutStore/useCraftLayoutStore";

export const useSlotsLayouts = () => {
  const store = useCraftLayoutStore();
  const slots = useStore(store, (state) => state.slots.list);

  const layouts = React.useMemo(() => {
    const result = {
      lg: [],
      md: [],
      sm: [],
      xs: [],
      xxs: [],
    };

    Object.entries(slots).map((item) => {
      const [i, slot] = item;

      Object.keys(slot.breakpoints).forEach((breakpoint) => {
        if (slot.breakpoints[breakpoint] !== null) {
          result[breakpoint].push({
            i,
            ...slot.breakpoints[breakpoint],
          });
        }
      });
    });

    return result;
  }, [slots]);

  return layouts;
};
