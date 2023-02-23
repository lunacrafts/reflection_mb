import { RootRoute } from '@tanstack/react-router';
import { RootComponent } from './root.component';

import { indexRoute } from './index/index.route';

import { shellRoute } from './shell/shell.route';
import { mirrorboardRoute } from './shell/mirrorboard/mirrorboard.route';
import { authRoute } from './auth/auth.route';

export const rootRoute = new RootRoute({
  component: RootComponent,
});

export const routeTree = rootRoute.addChildren([
  authRoute,
  indexRoute,
  shellRoute.addChildren([
    mirrorboardRoute
  ])
]);
