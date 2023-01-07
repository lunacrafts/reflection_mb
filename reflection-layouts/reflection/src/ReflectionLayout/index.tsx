import { Box, createStyles, DefaultProps, Selectors, useComponentDefaultProps } from "@mantine/core";
import { PropsWithChildren } from "react";

export interface ReflectionLayoutStyleParams {
  spacing: number;
}

const useStyles = createStyles((theme, { spacing }: ReflectionLayoutStyleParams) => {
  return {
    root: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
    container: {
      flexGrow: 1,
      flexDirection: "row",
      display: "flex",
    },
    activityBar: {
      width: spacing * 2,
      height: "100%",
      borderRightWidth: 1,
      borderRightStyle: "solid",
      borderRightColor: theme.colors.gray[7],
    },
    primarySidebar: {
      width: spacing * 9,
      height: "100%",
      borderRightWidth: 1,
      borderRightStyle: "solid",
      borderRightColor: theme.colors.gray[7],
    },
    footer: {
      height: spacing,
      borderTopWidth: 1,
      borderTopStyle: "solid",
      borderTopColor: theme.colors.gray[7],
    },
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
    <>
      {props.children}

      <Box className={cx(classes.root, className)}>
        <Box className={cx(classes.container)}>
          <Box className={cx(classes.activityBar)}></Box>
          <Box className={cx(classes.primarySidebar)}></Box>
        </Box>
        <Box className={cx(classes.footer)}></Box>
      </Box>
    </>
  );
};

// import { PropsWithChildren } from "react";
// import { useActivityBarItems } from "../useActivityBarItems";

// export const ReflectionLayout: React.FC<PropsWithChildren<ReflectionLayoutProps>> = (props) => {
//   const activityBarTop = useActivityBarItems((item) => item.meta.placement === "top");
//   const activityBarBottom = useActivityBarItems((item) => item.meta.placement === "bottom");

//   return (
//     <>
//       {props.children}

//       <div>activity bar top</div>
//       <div>{activityBarTop}</div>

//       <div>activity bar bottom</div>
//       <div>{activityBarBottom}</div>
//     </>
//   );
// };
