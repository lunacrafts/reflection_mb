import { ActivityBarItem, useActivityBarItem } from "@reflection-layouts/reflection";

const MirrorboardsCore = () => {
  useActivityBarItem(
    {
      namespace: "hypeboards.core.settings",
      render: () => <ActivityBarItem>settings</ActivityBarItem>,
      meta: {
        placement: "bottom",
      },
    },
    []
  );

  return null;
};

export default MirrorboardsCore;
