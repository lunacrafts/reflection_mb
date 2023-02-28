import { ActivityBarItem, useActivityBarItem } from "@reflection-layouts/reflection";
import { FontAwesomeIcon } from "@reflection/icons";
import { Outlet } from "@tanstack/react-router";

export const HypeboardsComponent = () => {
  useActivityBarItem(
    {
      namespace: "hypeboards.sources",
      render: () => (
        <ActivityBarItem tooltip={"Hypeboard"}>
          <FontAwesomeIcon icon={"square-h"} color={"white"} fontSize={20} />
        </ActivityBarItem>
      ),
      meta: {
        placement: "top",
        order: 10,
      },
    },
    []
  );

  return <div style={{ height: '100%', backgroundColor: '#181818' }}>
    Hypeboards Root!
    <Outlet />
  </div>
}
