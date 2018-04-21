/**
 * Hotel Routes
 */

import { Router } from 'express';

import * as HotelController from './hotel.controller';

const routes = new Router();

/**
 * CRUD
 */

routes.get('/', HotelController.index);

export default routes;
