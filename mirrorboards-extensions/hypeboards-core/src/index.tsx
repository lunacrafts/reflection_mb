import { ActivityBarItem, useActivityBarItem } from "@reflection-layouts/reflection";

const HypeboardsCore = () => {
  useActivityBarItem(
    {
      namespace: "hypeboards.core",
      render: () => <ActivityBarItem>hype</ActivityBarItem>,
      meta: {
        placement: "top",
      },
    },
    []
  );

  return null;
};

export default HypeboardsCore;
