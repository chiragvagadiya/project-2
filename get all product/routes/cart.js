var express = require('express');
var {add,getAllcart,getsingelcart,Delete,update,search} = require ('../controller/cartcontroller');
var router = express.Router();

/* GET home page. */
router.get('/allcart',getAllcart);
router.get('/getsingelcart/:id',getsingelcart);
router.get('/Delete/:id',Delete);
router.get('/update/:id',update);
router.get('/search/:id',search);
router.get('/addcart',add);


// router.get('/getallcard', getallcard);


module.exports = router ;