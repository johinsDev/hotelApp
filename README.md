# HOTEL APP ALMUNDO

# Get Started

- [Installation](https://github.com/johinsdev/hotelApp#installation)
- [Run Client](https://github.com/johinsdev/hotelApp#run-client)
- [Deploy](https://github.com/johinsdev/hotelApp#deploy)
- [Install Mongodb](https://github.com/johinsdev/hotelApp#install-mongodb)
- [Raven Log](https://github.com/johinsdev/hotelApp#raven-log)
- [Scripts](https://github.com/johinsdev/hotelApp#scripts)
- [Dev-Debug](https://github.com/johinsdev/hotelApp#dev-debug)
- [Seeds](https://github.com/johinsdev/hotelApp#seeds)
- [Techs](https://github.com/johinsdev/hotelApp#techs)

## Installation

1. Clone the project `git clone https://github.com/EQuimper/nodejs-api-boilerplate.git`.
2. Install dependencies `yarn install` or `npm i`
3. Create a `.env` file in the root like the `.env.example` file.
4. yarn dev or npm run dev init server
5. yarn db:seeds-hotels
6. run client. [How to?](https://github.com/johinsdev/hotelApp#run-client)
7. For dev you need to have mongodb db locally. [How to?](https://github.com/johinsdev/hotelApp#install-mongodb)

---

## Run Client

1. cd client
2. Install dependencies `yarn install` or `npm i`
3. yarn start
4. [url](http://localhost:9000/)

---

## Deploy

1. server yarn build
2. cd client
3. yarn build:prod

---

## Install Mongodb

With Homebrew you can just run `brew install mongodb` and after `brew services start mongodb`.

---

## Raven Log

For get raven log create account here: [Sentry](https://sentry.io/)


## Scripts

### DEV

```
yarn dev
```

or

```
npm run dev
```

**PS** That can crash if this is the first time but don't worry give it 2 sec the scripts gonna work. He just need to created a dist folder :) This way you have only one command to run.

### DEV-DEBUG

```
yarn dev:debug
```

or

```
npm run dev:debug
```

---

## Seeds

For seed just run one of this following comand. This is helpful in dev for making fake user.

**This is only available in dev environment**

- Seeds hotels `yarn db:seeds-hotels`
- Clear all collection `yarn db:seeds-clear`

---

## Techs

### SERVER 
- [Cors](https://github.com/expressjs/cors)
- [Body-Parser](https://github.com/expressjs/body-parser)
- [Morgan](https://github.com/expressjs/morgan)
- [Raven](https://github.com/getsentry/raven-node)
- [Http-Status](https://github.com/adaltas/node-http-status)
- [Prettier](https://github.com/prettier/prettier)
- [Eslint Config Prettier](https://github.com/prettier/eslint-config-prettier)
- [NPS](https://github.com/kentcdodds/nps)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](http://mongoosejs.com/)
- [Webpack](https://webpack.js.org/)

### CLIENT
- [react](https://github.com/facebook/react)
- [rect redux](https://github.com/reactjs/react-redux)
- [redux thunk](https://github.com/gaearon/redux-thunk)
- [react router](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)

---

