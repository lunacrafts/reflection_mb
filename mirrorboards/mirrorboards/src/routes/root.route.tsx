import { RootRoute } from '@tanstack/react-router';
import { indexRoute } from './index/index.route';
import { RootComponent } from './root.component';
import { shellRoute } from './shell/shell.route';

export const rootRoute = new RootRoute({
  component: RootComponent,
});

export const routeTree = rootRoute.addChildren([indexRoute, shellRoute]);
