const winston = require('winston')
const path = require('path');
const ecsFormat = require('@elastic/ecs-winston-format')

const logger = winston.createLogger({
  level: 'info',
  format: ecsFormat({ convertReqRes: true }),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logs/server.log' })
  ],
});

logger.info('logFilePath');
logger.error('Ceci est un log derreur.');
module.exports = logger