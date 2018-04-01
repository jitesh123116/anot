	
let async = require('async');
let annotationDAO = require('../DAO/annotationDAO');


let createAnnotation = (anotObj,callback) => {
	let insertObj = {
		id :anotObj.id ,
		range : anotObj.range,
		selectedText :anotObj.selectedText ,
		color :anotObj.color ,
		note :anotObj.note ,
		tags :anotObj.tags
	}
	async.waterfall([
		cb=> {
			const id = {"id" : anotObj.id};
			annotationDAO.updateAnotation(id, insertObj, (err,info)=>{
				if(err){
					return cb(err)
				}
				return cb(null,info)
			})
    	},
	],(err,result)=>{
			if(err) {
				callback(err);
			}
			console.log("result",result)
			callback(result)
		})
}

let getAnnotation = (anotObj,callback) => {
   //console.log(insertObj)
   annotationDAO.getAnnotation({},{}, (err, dbData) => {
	callback(dbData)
   })
   
}
let deleteAnnotation = (anotObj,callback) => {
	//console.log(insertObj)
	annotationDAO.deleteAnnotation(anotObj, (err, dbData) => {
	 callback(dbData)
	})
	
 }



module.exports = {
	createAnnotation,
	getAnnotation,
	deleteAnnotation
}