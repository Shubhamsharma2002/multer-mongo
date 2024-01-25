const express = require('express');
const Router = express.Router();
const {upload} = require('./upload');
const {postImg} = require('./controller')


Router.post('/', upload.single('imge'),postImg);

module.exports = {Router};