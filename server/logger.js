const winston = require('winston')

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [new winston.transports.Console()],
});

logger.info('Ceci est un log info.');
logger.error('Ceci est un log derreur.');
module.exports = logger