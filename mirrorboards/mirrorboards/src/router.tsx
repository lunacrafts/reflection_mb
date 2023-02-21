import { ReactRouter } from '@tanstack/react-router';
import { routeTree } from './routes/root.route';

export const router = new ReactRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
