import supertokens from 'supertokens-node';
import Dashboard from "supertokens-node/recipe/dashboard";
import Session from "supertokens-node/recipe/session";
import ThirdPartyEmailPassword from "supertokens-node/recipe/thirdpartyemailpassword";
import UserMetadata from "supertokens-node/recipe/usermetadata";
import { container } from 'tsyringe';
import { AuthContainer } from './auth/auth.container'
import { env } from 'env';
import { secrets } from './secrets';

const { Github } = ThirdPartyEmailPassword;

supertokens.init({
  framework: 'express',
  supertokens: {
    connectionURI: env.AUTH_SUPERTOKENS_API_URL
  },
  appInfo: {
    appName: 'mirrorboards',
    apiDomain: env.AUTH_API_URL,
    websiteDomain: env.MIRRORBOARDS_WEB_APP_URL,
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
          clientId: secrets.AUTH_GITHUB_CLIENT_ID,
          clientSecret: secrets.AUTH_GITHUB_CLIENT_SECRET
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

                const auth = container.resolve<AuthContainer>(AuthContainer);
                await auth._initialize();
                await auth.services.users.create(id, email);
              }

              return response;
            },
            thirdPartySignInUp: async (input) => {
              const response = await originalImplementation.thirdPartySignInUp(input);

              if (response.status === 'OK' && response.createdNewUser) {
                const { id, email } = response.user;

                await UserMetadata.updateUserMetadata(id, { email });

                const auth = container.resolve<AuthContainer>(AuthContainer);
                await auth._initialize();
                await auth.services.users.create(id, email);
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
