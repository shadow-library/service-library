/**
 * Importing npm packages
 */
import { FastifyModule } from '@shadow-library/fastify';
import { HealthModule } from '@shadow-library/modules';

/**
 * Importing user defined packages
 */

/**
 * Defining types
 */

/**
 * Declaring the constants
 */

export const HttpRouteModule = FastifyModule.forRoot({
  imports: [HealthModule],
});
