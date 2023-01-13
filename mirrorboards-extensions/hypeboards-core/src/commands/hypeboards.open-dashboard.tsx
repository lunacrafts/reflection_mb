import { registerCommand } from "@reflection/commands";

const OpenDashboardCommand = () => {
  registerCommand("open-dashboard", {
    namespace: "title",
  });

  return null;
};

export default OpenDashboardCommand;
