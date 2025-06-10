/**
 * Importing npm packages
 */
import { FastifyModule } from '@shadow-library/fastify';
import { HealthModule } from '@shadow-library/modules';

/**
 * Importing user defined packages
 */
import { ServerConfig } from '@server/services';

/**
 * Defining types
 */

/**
 * Declaring the constants
 */

export const HttpRouteModule = FastifyModule.forRoot({
  port: ServerConfig.get('server.port'),
  imports: [HealthModule],
});
