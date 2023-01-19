import { Box, createStyles, DefaultProps, Selectors, useComponentDefaultProps } from "@mantine/core";
import { PropsWithChildren } from "react";
import { useElementSize } from "@mantine/hooks";
import { Responsive as ResponsiveGridLayout } from "react-grid-layout";
import { useSlots } from "../useSlots/useSlots";
import React from "react";
import { useSlotsLayouts } from "../useSlotsLayouts/useSlotsLayouts";

export interface CraftLayoutStyleParams {}

const useStyles = createStyles(() => {
  return {
    root: {
      width: "100%",
      maxHeight: "100%",
      height: "100%",
      overflow: "hidden",
    },
  };
});

type CraftLayoutStylesNames = Selectors<typeof useStyles>;

export interface CraftLayoutProps extends DefaultProps<CraftLayoutStylesNames, CraftLayoutStyleParams> {}

const defaultProps: Partial<CraftLayoutProps> = {};

export const CraftLayout: React.FC<PropsWithChildren<CraftLayoutProps>> = (props) => {
  const { classNames, styles, unstyled, className, ...others } = props;

  const {} = useComponentDefaultProps("CraftLayout", defaultProps, props);
  const { classes, cx } = useStyles(null, { name: "CraftLayout", classNames, styles, unstyled });

  const { ref, width, height } = useElementSize();

  const slots = useSlots();
  const layouts = useSlotsLayouts();

  console.log(layouts);

  console.log(height);

  return (
    <Box ref={ref} className={cx(classes.root, className)} {...others}>
      <ResponsiveGridLayout
        autoSize
        className="layout"
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 100, md: 100, sm: 100, xs: 100, xxs: 100 }}
        rowHeight={height / 100}
        width={width}
        layouts={layouts}
        onBreakpointChange={(breakpoint) => {
          // console.log(breakpoint);
        }}
        margin={[0, 0]}
        useCSSTransforms={false}
        allowOverlap={true}
        isDraggable={false}
        isResizable={false}
        compactType={null}
      >
        {slots.map((slot) => (
          <div key={slot.i} style={{ border: "1px solid red" }}>
            {slot.i}
          </div>
        ))}
      </ResponsiveGridLayout>
    </Box>
  );
};
