import { ActivityBarItem, ReflectionLayout, StatusBarItem, useActivityBarItem, useStatusBarItem } from "@reflection-layouts/reflection";
import { FontAwesomeIcon } from "@reflection/icons";
import { Outlet } from "@tanstack/react-router";

export const MirrorboardComponent = () => {
  useActivityBarItem(
    {
      namespace: "drawer.toggle",
      render: () => (
        <ActivityBarItem tooltip={"Toggle drawer"}>
          <FontAwesomeIcon icon={"bars"} color={"white"} fontSize={17} />
        </ActivityBarItem>
      ),
      meta: {
        placement: "top",
      },
    },
    []
  );

  useActivityBarItem(
    {
      namespace: "settings",
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
      namespace: "mirrorboard.name",
      render: () => (
        <StatusBarItem tooltip="Switch Mirroboard">
          <div onClick={() => { }}>{'Mirrorboard!'}</div>
        </StatusBarItem>
      ),
      meta: {
        placement: "left",
      },
    },
    []
  );

  useStatusBarItem(
    {
      namespace: "mirrorboard.notifications",
      render: () => (
        <StatusBarItem tooltip="Notifications">
          <FontAwesomeIcon icon={"bell"} color={"white"} />
        </StatusBarItem>
      ),
      meta: {
        placement: "right",
        order: 1
      },
    },
    []
  );

  useStatusBarItem(
    {
      namespace: "fullscreen.toggle",
      render: () => (
        <StatusBarItem tooltip="Toggle Fullscreen">
          <FontAwesomeIcon icon={"expand"} color={"white"} />
        </StatusBarItem>
      ),
      meta: {
        placement: "right",
      },
    },
    []
  );

  return <div style={{ height: '100%', backgroundColor: '#181818' }}>
    <ReflectionLayout>
      <Outlet />
    </ReflectionLayout>
  </div>
}
