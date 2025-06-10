/**
 * Importing npm packages
 */
import { ConfigRecords, ConfigService } from '@shadow-library/common';

/**
 * Importing user defined packages
 */

/**
 * Defining types
 */

export interface ServerConfigRecords extends ConfigRecords {
  /** Server configs */
  'server.port': number;

  /** Database configs */
  'db.uri': string;
}

/**
 * Declaring the constants
 */

class ServerConfigService extends ConfigService<ServerConfigRecords> {
  constructor() {
    super();

    this.set('server.port', { defaultValue: '8080', validateType: 'number' });
    this.set('db.uri', { defaultValue: 'mongodb://localhost/shadow-library' });
  }
}

const globalRef = global as any;
export const ServerConfig: ServerConfigService = globalRef.serverConfigService || (globalRef.serverConfigService = new ServerConfigService());
