require('dotenv').config();

const npsUtils = require('nps-utils');

const { rimraf, crossEnv, series, concurrent } = npsUtils;

module.exports = {
  scripts: {
    build: {
      description: 'Building in production environment.',
      default: series.nps('clean', 'build.build'),
      build: 'webpack',
    },
    clean: {
      description: 'Clean dist folder.',
      default: rimraf('dist'),
    },
    default: {
      description: 'Start project with pm2 on production.',
      script: `${crossEnv('NODE_ENV=production')} pm2 start processes.json dist/index.bundle.js`,
    },
    doc: {
      description: 'Documenting the api.',
      default: 'apidoc -i src',
      deploy: {
        description: 'Deploy the docs on surge.',
        script: series('nps doc', `surge ./doc -d ${process.env.DOCS_WEBSITE}`),
      },
    },
    deploy: {
      description: 'Deploy the docs on surge.',
      script: series('nps doc', `surge ./doc -d ${process.env.DOCS_WEBSITE}`),
    },
    dev: {
      start: {
        description: 'Running on dev environment.',
        script: `${crossEnv('NODE_ENV=development')} nodemon dist/index.bundle.js`,
      },
      default: {
        script: concurrent.nps('dev.watch', 'dev.start'),
      },
      watch: {
        jdescription: 'Webpack watch for change and compile.',
        script: 'webpack -w',
      },
      withDebug: {
        script: `${crossEnv('NODE_ENV=development')} MONGOOSE_DEBUG=true DEBUG=express:* nodemon dist/index.bundle.js`,
      },
      jdebug: {
        description: 'Running on dev environment with debug on.',
        script: concurrent.nps('dev.watch', 'dev.withDebug'),
      },
    },
    lint: {
      default: 'eslint src', 
      fix: 'eslint --fix src',
    },
     validate: {
      description: 'Validate code by linting, type-checking.',
      default: series.nps('lint'),
    },
  }
};
