import { PropsWithChildren } from "react";

export const ReflectionLayout: React.FC<PropsWithChildren> = (props) => {
  return <div>{props.children}</div>;
};
