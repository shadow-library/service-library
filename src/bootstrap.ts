/**
 * Importing packages with side effects
 */
import 'reflect-metadata';

/**
 * Importing npm packages
 */
import { Config } from '@shadow-library/common';

/**
 * Importing user defined packages
 */

/**
 * Defining types
 */

declare module '@shadow-library/common' {
  export interface ConfigRecords {
    /** Server configs */
    'server.port': number;

    /** Database configs */
    'db.uri': string;
  }
}

/**
 * Configs
 */
Config.load('server.port', { defaultValue: '8080', validateType: 'number' });
Config.load('db.uri', { defaultValue: 'mongodb://localhost/shadow-library' });
