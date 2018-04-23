import { Router } from 'express';

import * as SeedController from './seeds.controller';

const routes = new Router();

routes.get('/hotels/:count?', SeedController.seedHotels);
routes.get('/clear', SeedController.clearAll);

export default routes;
