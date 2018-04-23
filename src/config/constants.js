require('dotenv').config();

const devConfig = {
  JWT_SECRET: process.env.JWT_SECRET_DEV,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
  CLOUDINARY_NAME: process.env.CLOUDINARY_NAME,
  MONGO_URL: process.env.MONGO_URL_DEV,
};

const testConfig = {
  JWT_SECRET: 'ewtijwebgiuweg9w98u9283982t!!u1h28h1t1h89u9h@$$',
  MONGO_URL: 'mongodb://localhost/nodejs-api-boilerplate-test',
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
  CLOUDINARY_NAME: process.env.CLOUDINARY_NAME
};

const prodConfig = {
  JWT_SECRET: process.env.JWT_SECRET_PROD,
  MONGO_URL: process.env.MONGO_URL_PROD,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
  CLOUDINARY_NAME: process.env.CLOUDINARY_NAME
};

const defaultConfig = {
  PORT: process.env.PORT || 3000,
  RAVEN_ID: process.env.RAVEN_ID
};

function envConfig(env) {
  switch (env) {
    case 'development':
      return devConfig;
    case 'test':
      return testConfig;
    default:
      return prodConfig;
  }
}

export default {
  ...defaultConfig,
  ...envConfig(process.env.NODE_ENV),
};
