import { ActivityBarItem, StatusBarItem, useActivityBarItem } from "@reflection-layouts/reflection";
import { useStatusBarItem } from "@reflection-layouts/reflection";
import { FontAwesomeIcon } from "@reflection/icons";
import React from "react";

const MirrorboardsCore = () => {
  const [mirrorboard] = React.useState({
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
      render: () => <StatusBarItem tooltip="Switch Mirrorboard">{mirrorboard.name}</StatusBarItem>,
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

export default MirrorboardsCore;
