var express = require('express');
var {add,getAllproduct,getsingelproduct,Delete,update,search} = require ('../controller/productcontroller');
var router = express.Router();

/* GET home page. */
router.get('/allproducts',getAllproduct);
router.get('/getsingelproducts/:id',getsingelproduct);
router.get('/Delete/:id',Delete);
router.get('/update/:id',update);
router.get('/search/:id',search);
router.get('/addproduct',add);




module.exports = router ;