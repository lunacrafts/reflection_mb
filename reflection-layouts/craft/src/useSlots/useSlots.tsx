import { useStore } from "zustand";
import { useCraftLayoutStore } from "../useCraftLayoutStore/useCraftLayoutStore";

export const useSlots = () => {
  const store = useCraftLayoutStore();
  const slots = useStore(store, (state) => state.slots.list);

  return Object.keys(slots).map((key) => ({
    i: key,
    ...slots[key],
  }));
};
