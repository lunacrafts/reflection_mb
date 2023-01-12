import { values } from "lodash";
import { useStore } from "zustand";
import { useCommandsStore } from "../useCommandsStore/useCommandsStore";

export const useCommandsList = () => {
  const store = useCommandsStore();
  const commands = useStore(store, (state) => state.commands.list);

  return values(commands);
};
