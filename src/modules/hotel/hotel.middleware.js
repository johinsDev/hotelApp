import APIError from '../../services/error';
import HTTPStatus from 'http-status';
import Hotel from './hotel.model';
import upload from '../../config/multer';

export async function findBySlug(req, res, next) {
  try {
    req.hotel = await Hotel.findOne({slug: req.params.slug}).populate('amenities');

    if (!req.hotel) next(new APIError('Not Found Hotel!', HTTPStatus.NOT_FOUND, true));

    next();
  } catch (err) {
    return next(err);
  }
}

export function uploadImage() {
  return upload.fields([
    { name: 'image', maxCount: 1 },
  ]);
}

