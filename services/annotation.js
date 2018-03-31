	
let async = require('async');
let annotationDAO = require('../DAO/annotationDAO');


let createAnnotation = (anotObj) => {
	 insertObj = {
		id :anotObj.id ,
		range : anotObj.range,
		selectedText :anotObj.selectedText ,
		color :anotObj.color ,
		note :anotObj.note ,
		tags :anotObj.tags

	}
	//console.log(insertObj)
    annotationDAO.createAnnotation(insertObj, (err, dbData) => {
		console.log(err,dbData,"db data>>>>>>>>>>>>>>>>>")
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