import { PropsWithChildren } from "react";
import { useActivityBarItems } from "../useActivityBarItems";

export interface ReflectionLayoutProps {}

export const ReflectionLayout: React.FC<PropsWithChildren<ReflectionLayoutProps>> = (props) => {
  const activityBarTop = useActivityBarItems((item) => item.meta.placement === "top");
  const activityBarBottom = useActivityBarItems((item) => item.meta.placement === "bottom");

  return (
    <>
      {props.children}

      <div>activity bar top</div>
      <div>{activityBarTop}</div>

      <div>activity bar bottom</div>
      <div>{activityBarBottom}</div>
    </>
  );
};
