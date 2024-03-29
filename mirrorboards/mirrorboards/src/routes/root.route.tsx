import { RootRoute } from '@tanstack/react-router';
import { RootComponent } from './root.component';
import { indexRoute } from './index/index.route';
import { shellRoute } from './shell/shell.route';

import { mirrorboardRoute } from './shell/mirrorboard/mirrorboard.route';
import { hypeboardsRoute } from '../extensions/hypeboards/routes/hypeboards.route';
import { boardsRoute } from './boards/boards.route';
import { hypeboardsIndexRoute } from '../extensions/hypeboards/routes/index/index.route';
import { hypeboardsSourcesRoute } from '../extensions/hypeboards/routes/sources/sources.route';

export const rootRoute = new RootRoute({
  component: RootComponent,
});

export const routeTree = rootRoute.addChildren([
  indexRoute,
  boardsRoute,
  shellRoute.addChildren([
    mirrorboardRoute.addChildren([
      hypeboardsRoute.addChildren([
        hypeboardsSourcesRoute,
        hypeboardsIndexRoute
      ])
    ]),
  ])
]);
