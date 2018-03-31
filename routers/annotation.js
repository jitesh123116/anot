var express = require('express');
var router = express.Router();
var annotService =  require('../services/annotation');


//create annotation
router.post('/anot', function(req, res){

    annotService.createAnnotation(req.body, (data) => {
        res.send(data);
    });
})
//get annoteted data
router.get('/getanot', function(req, res){

    annotService.getAnnotation({}, (data) => {
    
        res.send(data);
    });
})

//get annoteted data
router.post('/delete', function(req, res){
console.log("req.body")
const {id}=req.body;
    annotService.deleteAnnotation(id, (data) => {
        console.log(data,"deleted");
        res.send(data);
    });
})

module.exports = router;