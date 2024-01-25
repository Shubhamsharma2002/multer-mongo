const exAhandller = require('express-async-handler');
const Img = require('../models/schema');

const postImg = exAhandller(async(req, res)=>{
    try{
        if(!req.file){
            return res.status(500).json({error:"no file found"})
        }

        const imageFile = Img({
            filename:req.file.filename,
            filepath:req.file.path,
        })
        imageFile.save();
        //  res.status(200).json(savedImage);
        console.log(imageFile)
        return res.redirect('back')

         
    }catch(error){ 
         console.log("we are getting error in controller ", error);       
    } 
})

module.exports = {postImg}