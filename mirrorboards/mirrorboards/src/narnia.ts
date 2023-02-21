import { getNarniaClient } from 'narnia-react';
import envs from './envs';

export const narnia = getNarniaClient({
  url: envs.VITE_NARNIA_TRPC,
});
