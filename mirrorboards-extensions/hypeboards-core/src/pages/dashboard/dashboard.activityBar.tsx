import { FontAwesomeIcon } from "@reflection/icons";
import { ActivityBarItem, useActivityBarItem } from "@reflection-layouts/reflection";

export const DashboardActivityBar = () => {
  useActivityBarItem(
    {
      namespace: "dashboard",
      render: () => (
        <ActivityBarItem tooltip={"Hypeboard"}>
          <FontAwesomeIcon icon={"square-h"} color={"white"} fontSize={20} />
        </ActivityBarItem>
      ),
      meta: {
        placement: "top",
      },
    },
    []
  );

  return null;
};
