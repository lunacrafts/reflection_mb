import { ActivityBarItem, useActivityBarItem } from "@reflection-layouts/reflection";
import { FontAwesomeIcon } from "@reflection/icons";

const HypeboardsCore = () => {
  useActivityBarItem(
    {
      namespace: "hypeboards.core",
      render: () => (
        <ActivityBarItem tooltip={"Hypeboards"}>
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

export default HypeboardsCore;
