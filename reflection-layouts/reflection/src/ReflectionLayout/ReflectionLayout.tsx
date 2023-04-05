import { Box, createStyles, DefaultProps, Selectors, useComponentDefaultProps } from "@mantine/core";
import { PropsWithChildren } from "react";
import { ActivityBar } from "../ActivityBar/ActivityBar";
import { StatusBar } from "../StatusBar/StatusBar";

export interface ReflectionLayoutStyleParams {
  spacing: number;
}

const useStyles = createStyles((theme, { spacing }: ReflectionLayoutStyleParams) => {
  const borderColor = theme.colors.gray[7];

  return {
    root: {
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column'
    },
    container: {
      flexGrow: 1,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'row',
    },
    content: {
      flexGrow: 1,
      overflow: 'auto'
    },
    activityBar: {
      width: spacing * 2,
      borderRightWidth: 1,
      borderRightStyle: "solid",
      borderRightColor: borderColor,
    },
    statusBar: {
      height: spacing,
      minHeight: spacing,
      borderTopWidth: 1,
      borderTopStyle: "solid",
      borderTopColor: borderColor,
    }
  };
});

type ReflectionLayoutStylesNames = Selectors<typeof useStyles>;

export interface ReflectionLayoutProps extends DefaultProps<ReflectionLayoutStylesNames, ReflectionLayoutStyleParams> {
  spacing?: number;
}

const defaultProps: Partial<ReflectionLayoutProps> = {
  spacing: 30,
};

export const ReflectionLayout: React.FC<PropsWithChildren<ReflectionLayoutProps>> = (props) => {
  const { classNames, styles, unstyled, className } = props;

  const { spacing } = useComponentDefaultProps("ReflectionLayout", defaultProps, props);
  const { classes, cx } = useStyles({ spacing }, { name: "ReflectionLayout", classNames, styles, unstyled });

  return (
    <Box className={cx(classes.root, className)}>
      <Box className={cx(classes.container)}>
        <Box className={cx(classes.activityBar)}>
          <ActivityBar />
        </Box>
        <Box className={cx(classes.content)}>
          {props.children}
        </Box>
      </Box>
      <Box className={cx(classes.statusBar)}>
        <StatusBar />
      </Box>
    </Box>
  );
};
