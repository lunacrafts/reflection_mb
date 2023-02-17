import { generateOpenApiDocument } from 'trpc-openapi';

import { router } from 'narnia-trpc';

export const openApiDocument = generateOpenApiDocument(router, {
  title: 'Example CRUD API',
  description: 'OpenAPI compliant REST API built using tRPC with Next.js',
  version: '1.0.0',
  baseUrl: 'http://localhost:3456/api',
  docsUrl: 'https://github.com/jlalmes/trpc-openapi',
  tags: ['mirrorboards', 'openai'],
});
