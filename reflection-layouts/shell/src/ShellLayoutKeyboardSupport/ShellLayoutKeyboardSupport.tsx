import { PropsWithChildren } from "react";
import useHotkeys from "@reecelucas/react-use-hotkeys";
import { useShellLayout } from "../useShellLayout/useShellLayout";

interface ShellLayoutKeyboardSupportProps {
  onSelectedIndex?: (index: number) => void;
}
export const ShellLayoutKeyboardSupport: React.FC<PropsWithChildren<ShellLayoutKeyboardSupportProps>> = (
  props
) => {
  const { drawer } = useShellLayout();

  useHotkeys(["Control+0", "Meta+0"], () => {
    drawer.actions.toggle();
  });

  useHotkeys(
    "*",
    (event) => {
      const isNumber = event.code.startsWith("Digit");

      if (isNumber) {
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
