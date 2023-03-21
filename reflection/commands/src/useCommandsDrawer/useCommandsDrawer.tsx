import React from "react"
import { Drawer, DrawerProps } from '@mantine/core';
import { useCommandsStore } from "../useCommandsStore/useCommandsStore";
import { PushDrawer, PushDrawerRef } from "../PushDrawer/PushDrawer";

export type UseCommandDrawerArgs = {

}

export const useCommandDrawer = () => {
  const id = React.useId();
  const store = useCommandsStore();
  const ref = React.useRef<PushDrawerRef>();

  const pop = () => {
    ref.current = null;
    store.commands.unmount(id);
  }

  const push = (render: () => JSX.Element, args?: UseCommandDrawerArgs) => {
    store.commands.mount(id,
      <PushDrawer
        ref={ref}
        onClose={() => pop()}
      >
        {render()}
      </PushDrawer>
    );
  }

  return { push, pop, ref }
}
