/**
 * Importing npm packages
 */
import { Field, Schema } from '@shadow-library/class-schema';

/**
 * Importing user defined packages
 */

/**
 * Defining types
 */

/**
 * Declaring the constants
 */

@Schema()
export class HealthResponse {
  @Field(() => String, { enum: ['ok', 'error'], description: 'The status of the health check' })
  status: 'ok' | 'error';
}
