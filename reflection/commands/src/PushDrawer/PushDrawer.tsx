import { Drawer, DrawerProps } from "@mantine/core";
import React, { PropsWithChildren, useEffect } from "react";

export type PushDrawerRef = {
  close: () => void
}

type PushDrawerProps = PropsWithChildren<{
  onClose?: () => void
}>

export const PushDrawer = React.forwardRef<PushDrawerRef, PushDrawerProps>((props, ref) => {
  const [opened, setOpened] = React.useState(false);

  const onClose = () => {
    setOpened(false);

    setTimeout(() => {
      props.onClose?.();
    }, 200);
  }

  const onOpen = () => {
    setOpened(true);
  }

  useEffect(() => {
    onOpen();
  }, []);

  React.useImperativeHandle(ref, () => {
    return {
      close: () => {
        onClose();
      }
    }
  }, [opened]);

  return <Drawer
    opened={opened}
    onClose={onClose}
    position={'right'}>
    {props.children}
  </Drawer>
});
