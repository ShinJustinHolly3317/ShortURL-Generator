# ShortURL-Generator v1.0
A generator which create a short, new but encrypt link to substitute for the original one.

## Heroku

[Shortened URL Generator](https://sleepy-fjord-90832.herokuapp.com/)

- Seed data you can try
1. [Google](https://sleepy-fjord-90832.herokuapp.com/NdrM2) `https://sleepy-fjord-90832.herokuapp.com/NdrM2`
2. [Yahoo](https://sleepy-fjord-90832.herokuapp.com/QQrsO) `https://sleepy-fjord-90832.herokuapp.com/QQrsO`
3. [Alpha Camp](https://sleepy-fjord-90832.herokuapp.com/4pxM1) `https://sleepy-fjord-90832.herokuapp.com/4pxM1`

## Features
- Generate a non-repeated encrypt url for your target(original) url
- Can copied after generation

## Prerequisites & Environment
- Dev platform: [Visual Studio](https://code.visualstudio.com/)
- Data Base: [MongoDB](https://www.mongodb.com/) v4.2.14
- Environment: [Nodejs v10.15.0](https://github.com/coreybutler/nvm-windows/releases) (installed by nvm)
- Back-end Framework: [Express](https://www.npmjs.com/package/express) v4.17.1
- Package: [Express-handlebars](https://www.npmjs.com/package/express-handlebars) v5.3.2
- Package: [Cookie-Parser](https://www.npmjs.com/package/cookie-parser) v1.4.5
- Package: [Mongoose](https://www.npmjs.com/package/mongoose) v5.13.2
- Package: [Nodemon](https://www.npmjs.com/package/nodemon) v2.0.9

## Installation & Execution
1. Download
``` 
git clone https://github.com/ShinJustinHolly3317/ShortURL-Generator.git
```        
2. Set up environment

   - make sure you are in the working directory
```
npm install
```
3. Execute this program
```
npm run start
```
4. If you see reports below, you are runnig this program successfully
```
This server is running on http://localhost:3000
MongoDB connected~
```
5. If you want to start up Dev mode
```
// you should install nodemon
npm i -g nodemon
// then start Dev mode
npm run dev
```

## Contributor
- [Justin Holly](https://github.com/ShinJustinHolly3317)
