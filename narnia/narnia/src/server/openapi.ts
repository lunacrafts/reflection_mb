import { generateOpenApiDocument } from 'trpc-openapi';

import { router } from 'narnia-trpc';

export const openApiDocument = generateOpenApiDocument(router, {
  title: 'Narnia Router API',
  description: 'Narnia API Gateway',
  version: '1.0.0',
  baseUrl: 'http://localhost:3456/api',
  tags: ['mirrorboards', 'openai'],
});
