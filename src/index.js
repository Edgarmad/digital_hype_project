const express = require('express');
const morgan = require('morgan');
const path = require('path')
const app = express();

//Settings
app.set('port', process.env.PORT || 3001);
//Middlewares
app.use(morgan('dev'));
app.use(express.json());
//Routes
app.use('/api/task',require('./routes/routes.js'));
//Static files
app.use(express.static(path.join(__dirname,'public')));
app.listen(app.get('port'),()=>{
    console.log('test 1')
});