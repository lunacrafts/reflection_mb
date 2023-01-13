import React from "react";
import { ReflectionExtension } from "@reflection/extension";
import { FontAwesomeIcon } from "@reflection/icons";
import { ActivityBarItem, StatusBarItem, useActivityBarItem } from "@reflection-layouts/reflection";
import { useStatusBarItem } from "@reflection-layouts/reflection";

const MirrorboardsCore = () => {
  const [mirrorboard, setMirrorboard] = React.useState({
    name: "Hypeboard!",
  });

  useActivityBarItem(
    {
      namespace: "mirrorboards.core.settings",
      render: () => (
        <ActivityBarItem tooltip={"Settings"}>
          <FontAwesomeIcon icon={"cog"} color={"white"} fontSize={17} />
        </ActivityBarItem>
      ),
      meta: {
        placement: "bottom",
      },
    },
    []
  );

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

  useStatusBarItem(
    {
      namespace: "mirrorboards.core.notifications",
      render: () => (
        <StatusBarItem tooltip="Notifications">
          <FontAwesomeIcon icon={"bell"} color={"white"} />
        </StatusBarItem>
      ),
      meta: {
        placement: "right",
      },
    },
    []
  );

  useStatusBarItem(
    {
      namespace: "mirrorboards.core.toggleFullScreen",
      render: () => (
        <StatusBarItem tooltip="Toggle Full Screen">
          <FontAwesomeIcon icon={"expand"} color={"white"} />
        </StatusBarItem>
      ),
      meta: {
        placement: "right",
      },
    },
    []
  );

  return null;
};

export const extension = new ReflectionExtension({
  scope: "mirrorboards.core",
  component: <MirrorboardsCore />,
});
