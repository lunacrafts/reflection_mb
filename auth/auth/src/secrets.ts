import { z } from 'zod';

const notEmptyString = z.string().trim().min(1);

const {
  AUTH_GITHUB_CLIENT_ID,
  AUTH_GITHUB_CLIENT_SECRET,
} = process.env;

export const secrets = z.object({
  AUTH_GITHUB_CLIENT_ID: notEmptyString,
  AUTH_GITHUB_CLIENT_SECRET: notEmptyString,
}).parse({
  AUTH_GITHUB_CLIENT_ID,
  AUTH_GITHUB_CLIENT_SECRET,
});
