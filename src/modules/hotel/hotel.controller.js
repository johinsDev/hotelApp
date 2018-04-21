import APIError from '../../services/error';
import HTTPStatus from 'http-status';

// CONTROLLER FUNCTIONS

export async function index(req, res, next) {
  try {
    res.status(HTTPStatus.OK).json({ test: 'test' });
  } catch (err) {
    err.status = HTTPStatus.BAD_REQUEST;
    return next(err);
  }
}

