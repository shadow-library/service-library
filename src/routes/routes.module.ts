/**
 * Importing npm packages
 */
import cookie from '@fastify/cookie';
import { Config } from '@shadow-library/common';
import { FastifyModule } from '@shadow-library/fastify';
import { HealthModule } from '@shadow-library/modules';
import { OpenAPIV3 } from 'openapi-types';

/**
 * Importing user defined packages
 */

import { RequestInitializerMiddleware } from './request-initializer.middleware';

/**
 * Defining types
 */

/**
 * Declaring the constants
 */
const openapi: Partial<OpenAPIV3.Document> = {
  info: { title: Config.get('app.name'), version: '1.0.0' },
  components: {},
};

export const HttpRouteModule = FastifyModule.forRoot({
  imports: [HealthModule],
  controllers: [RequestInitializerMiddleware],

  host: Config.get('server.host'),
  port: Config.get('server.port'),
  fastifyFactory: async instance => {
    await instance.register(cookie);

    if (Config.isDev()) {
      const fastifySwagger = await import('@fastify/swagger');
      const scalar = await import('@scalar/fastify-api-reference');

      await instance.register(fastifySwagger, { openapi });
      await instance.register(scalar.default, { routePrefix: '/dev/api-docs' });
    }

    if (Config.isProd()) {
      const helmet = await import('@fastify/helmet');
      const compress = await import('@fastify/compress');

      await instance.register(helmet, { global: true });
      await instance.register(compress, { global: true });
    }

    return instance;
  },
});
