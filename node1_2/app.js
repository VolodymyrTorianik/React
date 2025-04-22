const formatName = require('./formatter');


const userName = process.argv[2];


  const formattedName = formatName(userName);
  console.log(`Привіт, ${formattedName}`);


const { getFormattedTime } = require('./time');

console.log('Поточний час:', getFormattedTime());


const logger = require('./logger');

logger.info('Програма запущена');
logger.warn('Це попередження!');
logger.error('Щось пішло не так...');


const { getEnvConfig } = require('./env');

const config = getEnvConfig();

console.log('Конфігурація середовища:');
console.log(config);
