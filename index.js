require('dotenv').config();
import express from 'express';
import routes from './src/modules';
import constants from './src/config/constants';
import middlewaresConfig from './src/services/middlewares';
import './src/config/database';

const app = express();
const PORT = constants.PORT;

middlewaresConfig(app);
app.use('/api', routes);
app.listen(PORT, err => {
  if (err) {
    console.log('Cannot run');
  } else {
    console.log(
      `
        Yep this is working 🍺
        App listen on port: ${PORT} 🍕
        Env: ${process.env.NODE_ENV} 🦄
      `
    );
  }
});

export default app;
