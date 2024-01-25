const express = require('express');
const app = express();
const port = 9000;
const db = require('./config/mongose');
const multer = require('./config/uploads');
app.set('view engine', 'ejs');
app.set('views', './views');
// app.use('/upload/first', express.static(__dirname + '/upload/first/'));
app.use('/', require('./routes'))
app.listen(9000, () => {
      
      console.log("we fired the server suceesfully :)");
});