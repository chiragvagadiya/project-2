const product = require('../model/productmodel');

exports.getAllproduct = (req, res) => {
    
    var limit =2;

    var page_no = req.query.page_no;

    if(page_no==undefined)
    {
        page_no= 1;
    }
     
    var start = (page_no-1) * limit;

    product.find().skip(start).limit(limit)
        .then(product => {
            res.json(product);
        })
        .catch(error => {
            console.error('Error retrieving products', error);
            res.status(200).json({
                error: 'An error occurred'
            });
        });
};
exports.getsingelproduct = async(req, res) => {
    var id = req.params.id;
    console.log(id);
    await product.find({_id:id})
        .then(product => {
            res.json(product);
        })
        .catch(error => {
            console.error('Error retrieving products', error);
            res.status(200).json({
                error: 'An error occurred'
            });
        });
};


exports.Delete = async (req, res) => {

    var id = req.params.id; 

    var data = await product.findByIdAndDelete(id,req.body)
    res.status(200).json({
        status: 'success',
        data
    })
};

exports.update = async (req, res) => {

    var id = req.params.id; 

    var data = await product.findByIdAndUpdate(id,req.body)
    res.status(200).json({
        status: 'success',
        data
    })
};

exports.search = async (req, res) => {

    var id = req.params.id; 

    var data = await product.findById(id,req.body)
    res.status(200).json({
        status: 'success',
        data
    })
};

exports.add = async (req, res) => {

    var data = await product.create(req.body)
    res.status(200).json({
        status: 'success',
        data
    })
};


