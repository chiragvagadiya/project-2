var express = require('express');
var {add,getAllusers,getsingelusers,Delete,update,search} = require ('../controller/userscontroller');
var router = express.Router();

/* GET home page. */
router.get('/allusers',getAllusers);
router.get('/getsingelusers/:id',getsingelusers);
router.get('/Delete/:id',Delete);
router.get('/update/:id',update);
router.get('/search/:id',search);
router.get('/addusers',add);



module.exports = router ;