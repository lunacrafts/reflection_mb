import { z } from 'zod';

const notEmptyString = z.string().trim().min(1);

const {
  VITE_NARNIA_TRPC,
  VITE_LUNA_API_URL,
  VITE_LUNA_WEBSITE_URL,
} = process.env;

export const envs = z.object({
  VITE_NARNIA_TRPC: notEmptyString,
  VITE_LUNA_API_URL: notEmptyString,
  VITE_LUNA_WEBSITE_URL: notEmptyString,
}).parse({
  VITE_NARNIA_TRPC,
  VITE_LUNA_API_URL,
  VITE_LUNA_WEBSITE_URL
});
