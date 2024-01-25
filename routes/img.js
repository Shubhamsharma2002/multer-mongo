const express = require('express')
// const multer = require('multer')
const router = express.Router();
const controller = require('../controller/imgcontroller')
const upload = require('../config/uploads');
router.post('/create' ,controller.postImg);

module.exports = router;
