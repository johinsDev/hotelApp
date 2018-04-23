/**
 * Seed controller for fill your db of fake data
 */

import HTTPStatus from 'http-status';

import Hotel from '../hotel/hotel.model';
import Amenitie from '../hotel/amenitie.model';
import { hotelSeed } from './hotels.seed';

export async function seedHotels(req, res, next) {
  try {
    const url = req.protocol + '://' + req.get('host');
    await hotelSeed(req.params.count, url);

    return res
      .status(HTTPStatus.OK)
      .send('All hotels create');
  } catch (e) {
    e.status = HTTPStatus.BAD_REQUEST;
    return next(e);
  }
}

export async function clearAll(req, res, next) {
  try {
    await Promise.all([Hotel.remove(), Amenitie.remove()]);

    return res.status(HTTPStatus.OK).send('All collections clear');
  } catch (e) {
    e.status = HTTPStatus.BAD_REQUEST;
    return next(e);
  }
}
