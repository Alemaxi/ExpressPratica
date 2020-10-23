const { json } = require('body-parser');
var express = require('express');
var router = express.Router();

const indexController = require('../controllers/index')

/* GET home page. */
router.get('/', indexController);

router.post('/test', (req,res) =>{
    res.send(req.body)
} )

module.exports = router;
