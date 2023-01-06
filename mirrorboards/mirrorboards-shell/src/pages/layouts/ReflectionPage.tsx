import { ReflectionLayout, ReflectionLayoutProvider, useActivityBarItem } from "@reflection-layouts/reflection";
import React from "react";

export const ReflectionPage = () => {
  return (
    <ReflectionLayoutProvider>
      <ReflectionLayout>
        <ReflectionLayoutExtensions namespace={"icon-A"} placement="top" />
        <ReflectionLayoutExtensions namespace={"icon-B"} placement="bottom" />
      </ReflectionLayout>
    </ReflectionLayoutProvider>
  );
};

const ReflectionLayoutExtensions: React.FC<{ namespace: string; placement: "top" | "bottom" }> = (props) => {
  const [char, setChar] = React.useState("M");

  useActivityBarItem(
    {
      namespace: props.namespace,
      render: () => <div onClick={() => setChar("F")}>{char}</div>,
      meta: {
        placement: props.placement,
      },
    },
    [props.namespace, char]
  );

  return null;
};
