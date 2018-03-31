

'use strict';

var Models = require('../models/annotation');

// var updateCustomer = function(criteria, dataToSet, options, callback) {
//     options.lean = true;
//     options.new = true;
//     Models.findOneAndUpdate(criteria, dataToSet, options, callback);
// };

//Insert annotatedData in DB
var createAnnotation = function(objToSave, callback) {
    
   var anot= new Models(objToSave)
   console.log(anot,"anot")
   anot.save(err => {  
    if (err) console.log("<<<<<<<<<<<<<<<",err);
    return console.log(">>>>>>>>>>>>>>>");
});
};
//Delete User in DB
var deleteAnnotation = function(criteria, callback) {
    Models.findOneAndRemove(criteria, callback);
};


//Get Users from DB
var getAnnotation = function(criteria, projection, callback) {
    
    Models.find(criteria, projection, callback);
};

module.exports = {
    // updateCustomer: updateCustomer,
    createAnnotation,
    deleteAnnotation,
    getAnnotation
}