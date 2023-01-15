import React from "react";
import { StatusBarItem } from "@reflection-layouts/reflection";
import { useStatusBarItem } from "@reflection-layouts/reflection";

export const CurrentMirrorboardStatusBar = () => {
  const [mirrorboard, setMirrorboard] = React.useState({
    name: "Hypeboard!",
  });

  useStatusBarItem(
    {
      namespace: "mirrorboards.core.currentMirrorboard",
      render: () => (
        <StatusBarItem tooltip="Switch Mirrorboard">
          <div onClick={() => setMirrorboard({ name: "Switched!" })}>{mirrorboard.name}</div>
        </StatusBarItem>
      ),
      meta: {
        placement: "left",
      },
    },
    [mirrorboard]
  );

  return null;
};
