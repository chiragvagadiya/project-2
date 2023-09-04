var usermodel = require ('../model/imagemodel');

exports.insert = async (req,res) =>{

    const file = req.file.originalname;

    var object = {
        image:file
    }

    var data = await usermodel.create(object);

    res.status(200).json({
        status :"success",
        data
    })
}