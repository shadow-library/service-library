/**
 * Importing packages with side effects
 */
import 'reflect-metadata';

/**
 * Importing npm packages
 */
import { ShadowFactory } from '@shadow-library/app';
import { Logger } from '@shadow-library/common';

/**
 * Importing user defined packages
 */
import { AppModule } from './app.module';

/**
 * Defining types
 */

/**
 * Declaring the constants
 */
const gitCommit = process.env.GIT_COMMIT_SHA || 'unknown';

Logger.setDefaultMetadata({ gitCommit }).addDefaultTransports();
ShadowFactory.create(AppModule).then(app => app.start());
