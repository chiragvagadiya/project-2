const todo = require('../model/todosmodel');

exports.getAlltodo = (req, res) => {

    var limit = 2;

    var page_no = req.query.page_no;

    if (page_no==undefined)
    {
        page_no = 1;
    }

    var start = (page_no-1) * limit;
    
    todo.find().skip(start).limit(limit)
        .then(todo => {
            res.json(todo);
        })
        .catch(error => {
            console.error('Error retrieving todo', error);
            res.status(200).json({
                error: 'An error occurred'
            });
        });
};
exports.getsingeltodo = async(req, res) => {
    var id = req.params.id;
    console.log(id);
    await todo.find({_id:id})
        .then(todo => {
            res.json(todo);
        })
        .catch(error => {
            console.error('Error retrieving todo', error);
            res.status(200).json({
                error: 'An error occurred'
            });
        });
};


exports.Delete = async (req, res) => {

    var id = req.params.id; 

    var data = await todo.findByIdAndDelete(id,req.body)
    res.status(200).json({
        status: 'success',
        data
    })
};

exports.update = async (req, res) => {

    var id = req.params.id; 

    var data = await todo.findByIdAndUpdate(id,req.body)
    res.status(200).json({
        status: 'success',
        data
    })
};

exports.search = async (req, res) => {

    var id = req.params.id; 

    var data = await todo.findById(id,req.body)
    res.status(200).json({
        status: 'success',
        data
    })
};

exports.add = async (req, res) => {

    var data = await todo.create(req.body)
    res.status(200).json({
        status: 'success',
        data
    })
};