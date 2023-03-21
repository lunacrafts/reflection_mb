import { PropsWithChildren } from "react";
import useHotkeys from "@reecelucas/react-use-hotkeys";
import { useMirrorboardsLayout } from "../useMirrorboardsLayout/useMirrorboardsLayout";

interface MirrorboardsLayoutKeyboardSupportProps {
  onSelectedIndex?: (index: number) => void;
}
export const MirrorboardsLayoutKeyboardSupport: React.FC<PropsWithChildren<MirrorboardsLayoutKeyboardSupportProps>> = (
  props
) => {
  const { drawer } = useMirrorboardsLayout();

  useHotkeys(["Control+0", "Meta+0"], () => {
    drawer.actions.toggle();
  });

  useHotkeys(
    "*",
    (event) => {
      const isNumber = event.code.startsWith("Digit");

      if (isNumber && props.onSelectedIndex) {
        props.onSelectedIndex(parseInt(event.key, 10) - 1);

        event.stopPropagation();
        event.preventDefault();
      }
    },
    {
      enabled: drawer.state.isExpanded && typeof props.onSelectedIndex !== "undefined",
    }
  );

  useHotkeys(
    "Escape",
    () => {
      drawer.actions.close();
    },
    {
      enabled: drawer.state.isExpanded,
    }
  );

  return <>{props.children}</>;
};
