import { ReflectionExtension } from "@reflection/extension";
import { FontAwesomeIcon } from "@reflection/icons";
import { ActivityBarItem, useActivityBarItem } from "@reflection-layouts/reflection";
import OpenDashboardCommand from "./commands/hypeboards.open-dashboard";

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

  return <OpenDashboardCommand />;
};

const extension = new ReflectionExtension({
  scope: "hypeboards.core",
  component: <HypeboardsCore />,
});

export default extension;
