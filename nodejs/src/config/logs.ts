var winston = require('winston');
require('winston-daily-rotate-file');

var transport = new winston.transports.DailyRotateFile({
  filename: 'logs/application-%DATE%.log',
  datePattern: 'YYYY-MM-DD-HH',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d'
});

transport.on('rotate', function(oldFilename, newFilename) {
  // do something fun
  console.log(oldFilename, newFilename);
});

const logger = winston.createLogger({
  transports: [
    transport
  ]
});

export { logger };