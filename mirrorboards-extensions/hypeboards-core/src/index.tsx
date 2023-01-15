import { ReflectionExtension } from "@reflection/extension";
import { DashboardPage } from "./pages/dashboard/dashboard.page";

const HypeboardsCore = () => {
  return (
    <>
      <DashboardPage />
    </>
  );
};

const extension = new ReflectionExtension({
  scope: "hypeboards.core",
  component: <HypeboardsCore />,
});

export default extension;
