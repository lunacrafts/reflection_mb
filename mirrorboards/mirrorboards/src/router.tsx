import { ReactRouter, RootRoute, Outlet, Route } from '@tanstack/react-router';

const rootRoute = new RootRoute({
  component: () => <div>Root! Outlet:<Outlet /></div>
});

const routeTree = rootRoute.addChildren([]);

export const router = new ReactRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
