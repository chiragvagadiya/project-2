var express = require('express');
const multer = require('multer');
var router = express.Router();

var {insert} = require('../controller/imagecontroller')
// SET STORAGE
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
var upload = multer({ storage: storage })

router.post('/',upload.single('image'),insert) ;
  

module.exports = router;