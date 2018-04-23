/**
 * Hotel Routes
 */

import { Router } from 'express';

import * as HotelController from './hotel.controller';
import * as HotelMiddleware from './hotel.middleware';

const routes = new Router();

/**
 * CRUD
 */

routes.post('/',
  HotelMiddleware.uploadImage(),
  HotelController.store
);

routes.get('/', HotelController.index);

routes.get('/:slug',
  HotelMiddleware.findBySlug,
  HotelController.find
);

routes.put('/:slug',
  HotelMiddleware.findBySlug,
  HotelController.update
);

routes.delete('/:slug',
  HotelMiddleware.findBySlug,
  HotelController.destroy
);

export default routes;
