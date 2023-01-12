import { Box, createStyles, DefaultProps, Selectors } from "@mantine/core";
import { PropsWithChildren } from "react";
import { Tooltip } from "@mantine/core";

export interface StatusBarItemStyleParams {}

const useStyles = createStyles((theme) => {
  return {
    root: {
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      cursor: "pointer",
      fontSize: theme.fontSizes.xs,
      paddingLeft: theme.spacing.xs,
      paddingRight: theme.spacing.xs,
      fontWeight: 500,
    },
  };
});

type StatusBarItemStylesNames = Selectors<typeof useStyles>;

export interface StatusBarItemProps extends DefaultProps<StatusBarItemStylesNames, StatusBarItemStyleParams> {
  tooltip?: string;
}

export const StatusBarItem: React.FC<PropsWithChildren<StatusBarItemProps>> = (props) => {
  const { classNames, styles, unstyled, className } = props;

  const { classes, cx } = useStyles(null, { name: "StatusBarItem", classNames, styles, unstyled });

  return (
    <Tooltip label={props.tooltip} disabled={!props.tooltip} position="top">
      <Box className={cx(classes.root, className)}>{props.children}</Box>
    </Tooltip>
  );
};
