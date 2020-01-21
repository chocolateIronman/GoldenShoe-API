'use strict';

var database=require("../utils/data/data");
var httpUtil= require("../utils/http/http");


/**
 * Deletes a category
 *
 * categoryID String 
 * no response value expected for this operation
 **/
exports.deleteCategory = function(args,res,next) {
  var id=args.categoryID.value || null; //match whats in the swagger file

  database.deleteCategory(
    id
  ).then(
    (result)=>{
      httpUtil.endHttpOK(result,res);
    }
  ).catch(
    (error)=>{
      httpUtil.endHttpErr(error,res);
    }
  )
}


/**
 * Loads a list of categories
 *
 * name String  (optional)
 * returns List
 **/
exports.getCategories = function(args,res,next) {

  database.getCategories().then(
    (result)=>{
      httpUtil.endHttpOK(result,res);
    }
  ).catch(
    (error)=>{
      httpUtil.endHttpErr(error,res);
    }
  )
}


/**
 * Loads a project category
 *
 * categoryID String 
 * no response value expected for this operation
 **/
exports.getCategory = function(args,res,next) {
  var id = args.categoryID.value || null;
  database.getCategory(
    id
  ).then(
    (result)=>{
      httpUtil.endHttpOK(result,res);
    }
  ).catch(
    (error)=>{
      httpUtil.endHttpErr(error,res);
    }
  )
}


/**
 * Adds a category
 *
 * body Category 
 * no response value expected for this operation
 **/
exports.postCategory = function(args,res,next) {
  var name=args.body.value.name || null;

  database.postCategory(
    name
  ).then(
    (result)=>{
      httpUtil.endHttpOK(result,res);
    }
  ).catch(
    (error)=>{
      httpUtil.endHttpErr(error,res);
    }
  )
}

