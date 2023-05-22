//importolj baigaa
const express = require('express');
const cors = require('cors');
const swaggerJSDocs = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

//ugugdluu tend hadgalsan baigaa tendeesee naashaa avchirch bga
require('dotenv').config();
//app daa express ee ugch bga 
const app = express();
//router dotor hadgalsan index.js d bichsen router uudiig importloj bga
const indexRouter = require('./router/index');
const feedbackRouter = require('./router/feedback')
// const swaggerDocument = require('../json/product.json');
// import router from './router'

//harsan
const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Pizza-hut api',
        version: '1.0.0',
      },
    },
    apis: ['app.js', './router/*.js'], // files containing annotations as above
  };

const openapiSpec = swaggerJSDocs(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup( openapiSpec));

// middleware 
// orj irj bga json huseltiig ugugdliig json bolgoj bga 
app.use(express.json());
//2 uur haygtai baigaag holboj baigaa
app.use(cors());

//huselteer orj irsen url bolon method iig hevleed daraachiin uildel ruu shiljij bga
app.use((req, res, next)=>{
    console.log(req.url, req.method);
    next();
})

//deer zarlasan dot.env file der hadgalsan portiin dugaaraar sonsood 
//amjilttai bol hevlene
app.listen(process.env.PORT, (req, res)=>{
    console.log(`server is running on ${process.env.PORT}`);
})





//api url ruu huselt orj irvel index iig ajilluulna 
app.use('/api/', indexRouter);

app.use('/feedback/', feedbackRouter)

