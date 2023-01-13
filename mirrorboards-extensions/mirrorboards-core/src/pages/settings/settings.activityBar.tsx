import { FontAwesomeIcon } from "@reflection/icons";
import { ActivityBarItem, useActivityBarItem } from "@reflection-layouts/reflection";

export const SettingsActivityBar = () => {
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

  return null;
};
