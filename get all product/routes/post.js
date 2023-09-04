var express = require('express');
var {add,getAllpost,getsingelpost,Delete,update,search} = require ('../controller/postcontroller');
var router = express.Router();

/* GET home page. */
router.get('/allpost',getAllpost);
router.get('/getsingelpost/:id',getsingelpost);
router.get('/Delete/:id',Delete);
router.get('/update/:id',update);
router.get('/search/:id',search);
router.get('/addpost',add);





module.exports = router ;