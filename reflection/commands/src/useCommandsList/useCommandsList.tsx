import { values } from "lodash";
import { useStore } from "zustand";
import { useCommandsStore } from "../useCommandsStore/useCommandsStore";

export const useCommandsList = () => {
  const store = useCommandsStore();
  const commands = useStore(store, (state) => state.commands.list);

  console.log("commands");
  console.log(commands);

  return values(commands);
};
