import { FontAwesomeIcon } from "@reflection/icons";
import { StatusBarItem } from "@reflection-layouts/reflection";
import { useStatusBarItem } from "@reflection-layouts/reflection";

export const NotificationsStatusBar = () => {
  useStatusBarItem(
    {
      namespace: "mirrorboards.core.notifications",
      render: () => (
        <StatusBarItem tooltip="Notifications">
          <FontAwesomeIcon icon={"bell"} color={"white"} />
        </StatusBarItem>
      ),
      meta: {
        placement: "right",
      },
    },
    []
  );

  return null;
};
