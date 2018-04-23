/**
 * API Routes
 */

import { Router } from 'express';
import HTTPStatus from 'http-status';

import Hotel from './hotel';
import Seed from './seeds';

import APIError from '../services/error';


const isDev = process.env.NODE_ENV === 'development';
const isTest = process.env.NODE_ENV === 'test';

// Middlewares
import logErrorService from '../services/log';

const routes = new Router();

routes.use('/hotels', Hotel);

if (isDev || isTest) {
  routes.use('/seeds', Seed);
}

routes.all('*', (req, res, next) =>
  next(new APIError('Not Found!', HTTPStatus.NOT_FOUND, true)),
);

routes.use(logErrorService);

export default routes;

