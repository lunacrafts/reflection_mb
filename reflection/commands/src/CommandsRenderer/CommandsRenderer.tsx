import React from "react";
import { useStore } from "zustand";
import { useCommandsContext } from "../useCommandsContext/useCommandsContext";
import { useCommandsStore } from "../useCommandsStore/useCommandsStore";

export const CommandsRenderer: React.FC = (props) => {
  const store = useCommandsContext();
  const mounted = useStore(store, state => state.commands.mounted);

  console.log(mounted);

  return <>
    <div>renderer:</div>
    {
      Object.keys(mounted).map((id) => {
        return <React.Fragment key={id}>{mounted[id]}</React.Fragment>
      })
    }
  </>
}
