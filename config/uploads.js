const multer = require('multer');

// const path = require('path');
const storage = multer.diskStorage({
     destination:(req, file, cb) =>{
        cb(null, "upload/second/");
     },
     filename:(req, file, cb) =>{
        cb(null, Date.now() + file.originalname);
     },

});


// ImgSchema.statics.uploadedAvatar = multer({storage:storage}).single('avatar');
// ImgSchema.statics.imgPath = IMG_PATH;
const upload = multer({storage:storage});

module.exports = {upload};