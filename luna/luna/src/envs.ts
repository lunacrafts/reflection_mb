import { z } from 'zod';

const notEmptyString = z.string().trim().min(1);

const {
  LUNA_API_URL,
  LUNA_WEBSITE_URL,
  MONGODB_URI,
  MONGODB_DB_NAME,
  SUPERTOKENS_API_URL,
  OAUTH_GITHUB_CLIENT_ID,
  OAUTH_GITHUB_CLIENT_SECRET,
} = process.env;

export const envs = z.object({
  LUNA_API_URL: notEmptyString,
  LUNA_WEBSITE_URL: notEmptyString,
  MONGODB_URI: notEmptyString,
  MONGODB_DB_NAME: notEmptyString,
  SUPERTOKENS_API_URL: notEmptyString,
  OAUTH_GITHUB_CLIENT_ID: notEmptyString,
  OAUTH_GITHUB_CLIENT_SECRET: notEmptyString,
}).parse({
  LUNA_API_URL,
  LUNA_WEBSITE_URL,
  MONGODB_URI,
  MONGODB_DB_NAME,
  SUPERTOKENS_API_URL,
  OAUTH_GITHUB_CLIENT_ID,
  OAUTH_GITHUB_CLIENT_SECRET,
});
