import { Route } from "@tanstack/react-location";
import { Index } from "./pages/Index";
import { ReflectionPage } from "./pages/layouts/ReflectionPage";

export const routes: Route[] = [
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/layouts/reflection",
    element: <ReflectionPage />,
  },
];
