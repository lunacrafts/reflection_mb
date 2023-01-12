import { Box, createStyles, DefaultProps, Selectors } from "@mantine/core";
import { PropsWithChildren } from "react";

export interface ActivityBarItemStyleParams {}

const useStyles = createStyles(() => {
  return {
    root: {},
  };
});

type ActivityBarItemStylesNames = Selectors<typeof useStyles>;

export interface ActivityBarItemProps extends DefaultProps<ActivityBarItemStylesNames, ActivityBarItemStyleParams> {}

export const ActivityBarItem: React.FC<PropsWithChildren<ActivityBarItemProps>> = (props) => {
  const { classNames, styles, unstyled, className } = props;

  const { classes, cx } = useStyles(null, { name: "ActivityBarItem", classNames, styles, unstyled });

  return <Box className={cx(classes.root, className)}>{props.children}</Box>;
};
