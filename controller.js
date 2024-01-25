const exAhandller = require('express-async-handler');
const Img = require('./schema');

const postImg = exAhandller(async(req, res)=>{
    try{
        if(!req.file){
            return res.status(500).json({error:"no file found"})
        }

        const imageFile = Img({
            filename:req.file.filename,
            filepath:req.file.path,
        })
         const savedImage = await imageFile.save();
         res.status(200).json(savedImage);
    }catch(error){ 
         console.log("we are getting error in controller ", error);       
    } 
})

module.exports = {postImg}