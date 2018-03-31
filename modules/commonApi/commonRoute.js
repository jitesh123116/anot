var express = require('express');
var router = express.Router();
var commonCntrl = require('./commonCntrl');



router.post('/anot', function(req, res){
 console.log(req.body);
	commonCntrl.getUserWithFeatured(req.body)
	.then(function(data){
		res.send(data);
	}, function(err){
		res.status(401).send(err);
	})
})



module.exports = router;