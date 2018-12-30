const pl = require('./locales/pl');
const en = require('./locales/en');

const locales = {
  pl,
  en,
};

const app = require('./server/server')({locales});

process.on('uncaughtException', (err) => {
  process.exit(1);
});

process.on('unhandledRejection', (err) => {
  process.exit(1);
});

app.listen(3000);