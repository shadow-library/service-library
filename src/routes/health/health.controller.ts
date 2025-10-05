/**
 * Importing npm packages
 */
import { Get, HttpController, RespondFor } from '@shadow-library/fastify';

/**
 * Importing user defined packages
 */
import { HealthResponse } from './dtos';

/**
 * Defining types
 */

/**
 * Declaring the constants
 */

@HttpController('/health')
export class HealthController {
  @Get()
  @RespondFor(200, HealthResponse)
  getStatus(): HealthResponse {
    return { status: 'ok' };
  }
}
