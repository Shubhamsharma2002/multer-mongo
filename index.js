const express = require('express');
const app = express();
const port = 9000;
const db = require('./connect');
const { Router } = require('./router');

app.use('/', Router);
app.listen(9000, () => {
      
      console.log("we fired the server suceesfully :)");
});


