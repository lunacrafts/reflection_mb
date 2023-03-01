import { generateOpenApiDocument } from 'trpc-openapi';
import { router } from 'luna-trpc';

export const openApiDocument = generateOpenApiDocument(router, {
  title: 'Luna',
  description: 'Luna Services',
  version: '1.0.0',
  baseUrl: 'http://localhost:3456/api',
  tags: [],
});
