import * as winston from 'winston';
import * as path from 'path';
import * as fs from 'fs';

const logger = new winston.Logger();

switch ((process.env.NODE_ENV || '').toLowerCase()) {
  // log into file
  case 'production': {
    const logDir = process.env.LOG_PATH || path.resolve('logs');
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir);
    }
    logger.add(winston.transports.File, {
      filename: 'application.log',
      dirname: logDir,
      handleExceptions: true,
      exitOnError: false,
      level: 'warn',
    });
    break;
  }

  // don't log anything when running test
  case 'test':
    break;

  // development
  default:
    logger.add(winston.transports.Console, {
      colorize: true,
      timestamp: true,
      level: 'silly',
    });
    logger.exitOnError = false;
    break;
}

// noinspection JSUnusedGlobalSymbols
export default logger;
