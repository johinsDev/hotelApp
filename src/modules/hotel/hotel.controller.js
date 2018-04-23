import HTTPStatus from 'http-status';
import Hotel from './hotel.model'; 

export async function store(req, res, next) {
  try {
    const hotel = await Hotel.create(req.body);
    if (req.files) {
      await hotel.uploadImage(req.files.image[0].path);
    }
    return res
      .status(HTTPStatus.CREATED)
      .json(hotel);
  } catch (err) {
    err.status = HTTPStatus.BAD_REQUEST;
    return next(err);
  }
}

export async function index(req, res, next) {
  try {
    const { page, sort, stars, name = '' } = req.query;
    const conditions = stars ? { stars, name: new RegExp(name, "i") } : { name: new RegExp(name, "i") };
    res.status(HTTPStatus.OK).json(await Hotel.list({ page, sort, conditions }));
  } catch (err) {
    err.status = HTTPStatus.BAD_REQUEST;
    return next(err);
  }
}

export async function update(req, res, next) {
  try {
    const hotel = await req.hotel.update(req.body);
    return res.status(HTTPStatus.OK).json(hotel);
  } catch (err) {
    err.status = HTTPStatus.BAD_REQUEST;
    return next(err);
  }
}

export async function destroy(req, res, next) {
  try {
    await req.hotel.remove();
    return res.sendStatus(HTTPStatus.OK);
  } catch (err) {
    err.status = HTTPStatus.BAD_REQUEST;
    return next(err);
  }
}

export async function find(req, res, next) {
  try {
    return res.status(HTTPStatus.OK).json(req.hotel.toJSON());
  } catch (err) {
    err.status = HTTPStatus.BAD_REQUEST;
    return next(err);
  }
}

