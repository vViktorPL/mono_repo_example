const express = require('express');
const cors = require('cors');

const createServer = ({locales}) => {
  const app = express();

  app.use(cors());

  app.get('/localizations', (req, res) => {
    return res.json(locales);
  });

  app.use((req, res, next) => {
    next({
      status: 404,
      message: 'not found',
    });
  });

  app.use((err, req, res) => {
    res
      .status(err.status || 500)
      .json({
        error: `Something went wrong ${err.message}, status: ${err.status}`,
      });
  });

  return app;
};


module.exports = createServer;