import { ReflectionLayout } from "@reflection-layouts/reflection";
import { ReflectionPageCraftDashboard } from "./ReflectionPageCraftDashboard";

export const ReflectionPage = () => {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <ReflectionLayout>
        <ReflectionPageCraftDashboard />
      </ReflectionLayout>
    </div>
  );
};
