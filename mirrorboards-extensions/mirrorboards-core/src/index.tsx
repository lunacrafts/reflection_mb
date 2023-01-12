import { ActivityBarItem, useActivityBarItem } from "@reflection-layouts/reflection";
import { FontAwesomeIcon } from "@reflection/icons";

const MirrorboardsCore = () => {
  useActivityBarItem(
    {
      namespace: "hypeboards.core.settings",
      render: () => (
        <ActivityBarItem>
          <FontAwesomeIcon icon={"cog"} color={"white"} fontSize={17} />
        </ActivityBarItem>
      ),
      meta: {
        placement: "bottom",
      },
    },
    []
  );

  return null;
};

export default MirrorboardsCore;
