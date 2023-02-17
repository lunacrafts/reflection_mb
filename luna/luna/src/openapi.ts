import { generateOpenApiDocument } from 'trpc-openapi';
import { router } from './router';

export const openApiDocument = generateOpenApiDocument(router, {
  title: 'Mirrorboards Auth',
  description: 'Mirrorboards Authentication Services',
  version: '1.0.0',
  baseUrl: 'http://localhost:4000/api',
  tags: ['auth'],
});
