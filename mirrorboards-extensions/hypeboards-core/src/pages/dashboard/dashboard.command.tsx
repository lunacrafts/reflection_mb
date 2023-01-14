import { Command, registerCommand } from "@reflection/commands";

export type HypeboardDashboardCommand = Command<
  "Test",
  {
    open: () => PromiseLike<void>;
  }
>;

// export type HypeboardDashboardCommand = {
//   namespace: 'dashboard',
//   actions: {
//     open: () => PromiseLike<void>;
//   };
// };

// export type HypeboardsDashboardCommand = CreateCommand<{
//   open: () => PromiseLike<void>;
// }>;

const DashboardCommand = () => {
  const foo: HypeboardDashboardCommand = {
    namespace: "Test",
    actions: {
      open: {
        description: "Open",
        action: async () => {
          console.log("open");
        },
      },
    },
  };

  // registerCommand<HypeboardDashboardCommand>({
  //   namespace: "dashboard",
  //   actions: {
  //     open: {
  //       label: "Open Hypeboards",
  //       action: () => {},
  //     },
  //   },
  // });

  return null;
};

export default DashboardCommand;
