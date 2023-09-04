var express = require('express');
var {add,getAlltodo,getsingeltodo,Delete,update,search} = require ('../controller/todoscontroller');
var router = express.Router();

/* GET home page. */
router.get('/alltodo',getAlltodo);
router.get('/getsingeltodo/:id',getsingeltodo);
router.get('/Delete/:id',Delete);
router.get('/update/:id',update);
router.get('/search/:id',search);
router.get('/addtodo',add);



module.exports = router ;