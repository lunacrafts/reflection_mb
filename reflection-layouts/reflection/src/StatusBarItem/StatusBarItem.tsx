import { Box, createStyles, DefaultProps, Selectors } from "@mantine/core";
import { PropsWithChildren } from "react";

export interface StatusBarItemStyleParams {}

const useStyles = createStyles((theme) => {
  return {
    root: {},
  };
});

type StatusBarItemStylesNames = Selectors<typeof useStyles>;

export interface StatusBarItemProps extends DefaultProps<StatusBarItemStylesNames, StatusBarItemStyleParams> {}

export const StatusBarItem: React.FC<PropsWithChildren<StatusBarItemProps>> = (props) => {
  const { classNames, styles, unstyled, className } = props;

  const { classes, cx } = useStyles(null, { name: "StatusBarItem", classNames, styles, unstyled });

  return <Box className={cx(classes.root, className)}>{props.children}</Box>;
};
