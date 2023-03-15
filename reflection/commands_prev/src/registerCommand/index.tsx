// import React from "react";
// import { useStore } from "zustand";
// import { Command } from "../types";
// import { useCommandsStore } from "../useCommandsStore";

// export function registerCommand(command: Command) {
//   const store = useCommandsStore();
//   const register = useStore(store, (state) => state.commands.register);
//   const unregister = useStore(store, (state) => state.commands.unregister);

//   React.useEffect(() => {
//     register(command.namespace, command);

//     return () => unregister(command.namespace);
//   }, []);
// }
