/**
 * Importing packages with side effects
 */
import './bootstrap';

/**
 * Importing npm packages
 */
import { Module, OnModuleInit } from '@shadow-library/app';
import { Logger } from '@shadow-library/common';
import { ContextService } from '@shadow-library/fastify';

/**
 * Importing user defined packages
 */
import { HttpRouteModule } from './routes';

/**
 * Defining types
 */

/**
 * Declaring the constants
 */

@Module({
  imports: [HttpRouteModule],
})
export class AppModule implements OnModuleInit {
  constructor(private readonly contextService: ContextService) {}

  private getLogMetadata(): Record<string, any> {
    const metadata: Record<string, any> = {};

    if (this.contextService.isInitialized()) {
      const request = this.contextService.getRequest();
      metadata.rid = request.id;
      metadata.cid = request.cid;
    }

    return metadata;
  }

  onModuleInit(): void {
    Logger.setLogMetadataProvider(() => this.getLogMetadata());
  }
}
