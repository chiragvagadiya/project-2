const post = require('../model/postmodel');

exports.getAllpost = (req, res) => {

    var limit =2;

    var page_no = req.quiry.page_no

    if(page_no==undefined){

        page_no=1;

    }

    var start = (page_no-1) * limit

    post.find().skip(start).limit(limit)
        .then(post => {
            res.json(post);
        })
        .catch(error => {
            console.error('Error retrieving post', error);
            res.status(200).json({
                error: 'An error occurred'
            });
        });
};
exports.getsingelpost = async(req, res) => {
    var id = req.params.id;
    console.log(id);
    await post.find({_id:id})
        .then(post => {
            res.json(post);
        })
        .catch(error => {
            console.error('Error retrieving post', error);
            res.status(200).json({
                error: 'An error occurred'
            });
        });
};


exports.Delete = async (req, res) => {

    var id = req.params.id; 

    var data = await post.findByIdAndDelete(id,req.body)
    res.status(200).json({
        status: 'success',
        data
    })
};

exports.update = async (req, res) => {

    var id = req.params.id; 

    var data = await post.findByIdAndUpdate(id,req.body)
    res.status(200).json({
        status: 'success',
        data
    })
};

exports.search = async (req, res) => {

    var id = req.params.id; 

    var data = await post.findById(id,req.body)
    res.status(200).json({
        status: 'success',
        data
    })
};

exports.add = async (req, res) => {

    var data = await post.create(req.body)
    res.status(200).json({
        status: 'success',
        data
    })
};
