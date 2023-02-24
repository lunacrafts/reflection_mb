import { z } from 'zod';

const notEmptyString = z.string().trim().min(1);

const {
  LUNA_JWKS_URL,
} = process.env;

export const envs = z.object({
  LUNA_JWKS_URL: notEmptyString,
}).parse({
  LUNA_JWKS_URL,
});
