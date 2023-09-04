var express = require('express');
var {add,getAllComment,getsingelComment,Delete,update,search} = require ('../controller/Commentcontroller');
var router = express.Router();

/* GET home page. */
router.get('/allComment',getAllComment);
router.get('/getsingelComment/:id',getsingelComment);
router.get('/Delete/:id',Delete);
router.get('/update/:id',update);
router.get('/search/:id',search);
router.get('/addComment',add);





module.exports = router ;