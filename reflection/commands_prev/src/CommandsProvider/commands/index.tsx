// import produce from "immer";
// import { StateCreator } from "zustand";
// import { CommandsStore } from "..";
// import { Command } from "../../types";

// export interface CommandsSlice {
//   commands: {
//     records: Record<string, Command>;
//     register: (namespace: string, command: Command) => void;
//     unregister: (namespace: string) => void;
//   };
// }

// export const createCommandsSlice: StateCreator<CommandsStore, [], [], CommandsSlice> = (set) => {
//   return {
//     commands: {
//       records: {},
//       register: (namespace, command) => {
//         set(
//           produce<CommandsStore>((state) => {
//             state.commands.records[namespace] = command;
//           })
//         );
//       },
//       unregister: (namespace) => {
//         set(
//           produce<CommandsStore>((state) => {
//             delete state.commands.records[namespace];
//           })
//         );
//       },
//     },
//   };
// };
