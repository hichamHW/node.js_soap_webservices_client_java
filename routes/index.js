var express = require('express');
var router = express.Router();
var soap = require("soap");
/* GET home page. */
router.get('/', function(req, res, next) {
  const  url = 'localhost:3000/mywebservices?wlsd';
  soap.createClient(url,(err,client)=>{
    return res.json(client.persons());
  })
});

module.exports = router;
