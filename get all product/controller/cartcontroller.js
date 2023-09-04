const cart = require('../model/cartmodel');

exports.getAllcart = (req, res) => {
    cart.find()
        .then(cart => {
            res.json(cart);
        })
        .catch(error => {
            console.error('Error retrieving products', error);
            res.status(200).json({
                error: 'An error occurred'
            });
        });
};
exports.getsingelcart = async(req, res) => {
    var id = req.params.id;
    console.log(id);
    await cart.find({_id:id})
        .then(cart => {
            res.json(cart);
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

    var data = await cart.findByIdAndDelete(id,req.body)
    res.status(200).json({
        status: 'success',
        data
    })
};

exports.update = async (req, res) => {

    var id = req.params.id; 

    var data = await cart.findByIdAndUpdate(id,req.body)
    res.status(200).json({
        status: 'success',
        data
    })
};

exports.search = async (req, res) => {

    var id = req.params.id; 

    var data = await cart.findById(id,req.body)
    res.status(200).json({
        status: 'success',
        data
    })
};

exports.add = async (req, res) => {

    var data = await cart.create(req.body)
    res.status(200).json({
        status: 'success',
        data
    })
};