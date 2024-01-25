const express = require('express')
const router = express.Router();
const controller = require('../controller/homecontroller');
const { upload } = require('../config/uploads');
router.get('/', controller.home);
router.use('/post', upload.single('imge'),require('./img'));

module.exports = router;
