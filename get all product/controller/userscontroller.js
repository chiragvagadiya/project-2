const users = require('../model/usersmodel');

exports.getAllusers = (req, res) => {

    var limit = 2;

    var page_no = req.query.page_no;

    if(page_no==undefined)
    {
        page_no=1;
    }

    var start = (page_no-1) * limit;

    users.find().skip(start).limit(limit)
        .then(users => {
            res.json(users);
        })
        .catch(error => {
            console.error('Error retrieving users', error);
            res.status(200).json({
                error: 'An error occurred'
            });
        });
};
exports.getsingelusers = async(req, res) => {
    var id = req.params.id;
    console.log(id);
    await users.find({_id:id})
        .then(users => {
            res.json(users);
        })
        .catch(error => {
            console.error('Error retrieving users', error);
            res.status(200).json({
                error: 'An error occurred'
            });
        });
};


exports.Delete = async (req, res) => {

    var id = req.params.id; 

    var data = await users.findByIdAndDelete(id,req.body)
    res.status(200).json({
        status: 'success',
        data
    })
};

exports.update = async (req, res) => {

    var id = req.params.id; 

    var data = await users.findByIdAndUpdate(id,req.body)
    res.status(200).json({
        status: 'success',
        data
    })
};

exports.search = async (req, res) => {

    var id = req.params.id; 

    var data = await users.findById(id,req.body)
    res.status(200).json({
        status: 'success',
        data
    })
};

exports.add = async (req, res) => {

    var data = await users.create(req.body)
    res.status(200).json({
        status: 'success',
        data
    })
};
