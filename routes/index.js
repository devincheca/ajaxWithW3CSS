var express = require('express');
var router = express.Router();
var indexRes = require('../controller/indexResponse.js');
var ajaxRes = require('../controller/ajaxResponse.js');

/* GET home page. */
router.get('/', indexRes.response);

router.get('/ajax', ajaxRes.response);

module.exports = router;