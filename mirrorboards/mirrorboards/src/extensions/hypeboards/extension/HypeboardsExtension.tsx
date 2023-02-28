import { ActivityBarItem, useActivityBarItem } from "@reflection-layouts/reflection";
import { FontAwesomeIcon } from "@reflection/icons";

export const HypeboardsExtension = () => {
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

  return null;
}
