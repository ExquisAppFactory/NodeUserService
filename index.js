const app = require('express')();
const routes = require('./routes');
const config = require('./config');
const db = config.db
const bodyParser = require('body-parser');
/**
 * initServer: initialises the UserService Server
 *      - connects to MongoDB using connectionString defined in the config.js
 *      - listens to the port defined in the config.js
 *
 * @returns {Promise<void>}
 *
 * @throws an error:
 *      - if any caused while creating Database connection (or)
 *      - if any port number issues like port in use, port out of range, etc
 */
const initServer = async () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use('/', routes);
  try {
    await db.connectMongo();

    app.listen(config.port, () => {
      console.log(`Server started at port: ${config.port}`);
    });
  }catch (e) {
    console.log(e)
    process.exit(1);
  }
};

initServer();

module.exports = app;
