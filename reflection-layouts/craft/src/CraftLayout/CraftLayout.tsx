import { Box, createStyles, DefaultProps, Selectors, useComponentDefaultProps } from "@mantine/core";
import { PropsWithChildren } from "react";

export interface CraftLayoutStyleParams {}

const useStyles = createStyles(() => {
  return {
    root: {
      width: "100%",
      height: "100%",
    },
  };
});

type CraftLayoutStylesNames = Selectors<typeof useStyles>;

export interface CraftLayoutProps extends DefaultProps<CraftLayoutStylesNames, CraftLayoutStyleParams> {
  spacing?: number;
}

const defaultProps: Partial<CraftLayoutProps> = {};

export const CraftLayout: React.FC<PropsWithChildren<CraftLayoutProps>> = (props) => {
  const { classNames, styles, unstyled, className } = props;

  const {} = useComponentDefaultProps("CraftLayout", defaultProps, props);
  const { classes, cx } = useStyles(null, { name: "CraftLayout", classNames, styles, unstyled });

  return <Box className={cx(classes.root, className)}>{"Render slots"}</Box>;
};
