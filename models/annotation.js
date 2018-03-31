var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let Annotation = new Schema({
    id : {
        type :String,
        required :true
    },
    range: {
        type: Object,
        required: true
    } ,
  
    selectedText : {
        type : String ,
     required :true
    },
    color : {
        type :String,
        required :true
    },
    note : {
        type :String,
        required :true
    },
    tags :{
        type :Array,
        
    }
    
});

module.exports = mongoose.model('Annotation', Annotation);
