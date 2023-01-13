import { FontAwesomeIcon } from "@reflection/icons";
import { StatusBarItem } from "@reflection-layouts/reflection";
import { useStatusBarItem } from "@reflection-layouts/reflection";

export const ToggleFullscreenStatusBar = () => {
  useStatusBarItem(
    {
      namespace: "mirrorboards.core.toggleFullscreen",
      render: () => (
        <StatusBarItem tooltip="Toggle Fullscreen">
          <FontAwesomeIcon icon={"expand"} color={"white"} />
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
