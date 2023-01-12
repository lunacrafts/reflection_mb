import { registerCommand } from "@reflection/commands";

const OpenDashboardCommand = () => {
  registerCommand({
    namespace: "hypeboards.open-dashboard",
  });

  return null;
};

export default OpenDashboardCommand;
