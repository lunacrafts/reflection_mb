import { registerCommand } from "@reflection/commands";

const DashboardCommand = () => {
  registerCommand("dashboard", {
    namespace: "Open Hypeboards",
  });

  return null;
};

export default DashboardCommand;
