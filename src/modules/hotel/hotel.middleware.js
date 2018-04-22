import APIError from '../../services/error';
import HTTPStatus from 'http-status';
import Hotel from './hotel.model';

export async function findBySlug(req, res, next) {
  try {
    req.hotel = await Hotel.findOne({slug: req.params.slug});

    if (!req.hotel) next(new APIError('Not Found Hotel!', HTTPStatus.NOT_FOUND, true));

    next();
  } catch (err) {
    return next(err);
  }
}
