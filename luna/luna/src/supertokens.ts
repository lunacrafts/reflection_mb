import supertokens from 'supertokens-node';
import Dashboard from "supertokens-node/recipe/dashboard";
import Session from "supertokens-node/recipe/session";
import ThirdPartyEmailPassword from "supertokens-node/recipe/thirdpartyemailpassword";
import UserMetadata from "supertokens-node/recipe/usermetadata";
import { container } from 'tsyringe';
import { envs } from './envs';
import { Luna } from './luna/luna';

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
    apiBasePath: '/auth',
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
      ],
      override: {
        functions: (originalImplementation) => {
          return {
            ...originalImplementation,
            emailPasswordSignUp: async (input) => {
              const response = await originalImplementation.emailPasswordSignUp(input);

              if (response.status === 'OK') {
                const { id, email } = response.user;

                await UserMetadata.updateUserMetadata(id, { email });

                const luna = container.resolve<Luna>(Luna);
                await luna._initialize();
                await luna.services.users.create(id, email);
              }

              return response;
            },
            thirdPartySignInUp: async (input) => {
              const response = await originalImplementation.thirdPartySignInUp(input);

              if (response.status === 'OK' && response.createdNewUser) {
                const { id, email } = response.user;

                await UserMetadata.updateUserMetadata(id, { email });

                const luna = container.resolve<Luna>(Luna);
                await luna._initialize();
                await luna.services.users.create(id, email);
              }

              return response;
            },
          }
        }
      }
    }),
    Session.init({
      jwt: {
        enable: true,
      },
    }),
  ]
});
