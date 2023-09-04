const Comment = require('../model/Commentmodel');

exports.getAllComment = (req, res) => {
    Comment.find()
        .then(Comment => {
            res.json(Comment);
        })
        .catch(error => {
            console.error('Error retrieving Comment', error);
            res.status(200).json({
                error: 'An error occurred'
            });
        });
};
exports.getsingelComment = async(req, res) => {
    var id = req.params.id;
    console.log(id);
    await Comment.find({_id:id})
        .then(Comment => {
            res.json(Comment);
        })
        .catch(error => {
            console.error('Error retrieving Comment', error);
            res.status(200).json({
                error: 'An error occurred'
            });
        });
};


exports.Delete = async (req, res) => {

    var id = req.params.id; 

    var data = await Comment.findByIdAndDelete(id,req.body)
    res.status(200).json({
        status: 'success',
        data
    })
};

exports.update = async (req, res) => {

    var id = req.params.id; 

    var data = await Comment.findByIdAndUpdate(id,req.body)
    res.status(200).json({
        status: 'success',
        data
    })
};

exports.search = async (req, res) => {

    var id = req.params.id; 

    var data = await Comment.findById(id,req.body)
    res.status(200).json({
        status: 'success',
        data
    })
};

exports.add = async (req, res) => {

    var data = await Comment.create(req.body)
    res.status(200).json({
        status: 'success',
        data
    })
};
