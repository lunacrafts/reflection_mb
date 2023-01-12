import { ActivityBarItem, useActivityBarItem } from "@reflection-layouts/reflection";

export const HypeboardsCore = () => {
  useActivityBarItem(
    {
      namespace: "hypeboards.core",
      render: () => <ActivityBarItem>test</ActivityBarItem>,
      meta: {
        placement: "top",
      },
    },
    []
  );

  return null;
};

export default HypeboardsCore;
