import supertokens from 'supertokens-node';
import Dashboard from "supertokens-node/recipe/dashboard";
import Session from "supertokens-node/recipe/session";
import ThirdPartyEmailPassword from "supertokens-node/recipe/thirdpartyemailpassword";
import UserMetadata from "supertokens-node/recipe/usermetadata";
import { envs } from './envs';

const { Github } = ThirdPartyEmailPassword;

supertokens.init({
  framework: 'express',
  supertokens: {
    connectionURI: envs.SUPERTOKENS_API_URL
  },
  appInfo: {
    appName: 'mirrorboards',
    apiDomain: envs.LUNA_API_URL,
    websiteDomain: envs.LUNA_WEBSITE_URL,
    apiBasePath: '/api/auth',
    websiteBasePath: '/auth'
  },
  recipeList: [
    UserMetadata.init(),
    Dashboard.init({
      apiKey: 'keyboard_cat'
    }),
    ThirdPartyEmailPassword.init({
      providers: [
        Github({
          clientId: envs.OAUTH_GITHUB_CLIENT_ID,
          clientSecret: envs.OAUTH_GITHUB_CLIENT_SECRET
        }),
      ]
    }),
    Session.init({
      jwt: {
        enable: true,
      },
    }),
  ]
});
