'use strict';

var database=require("../utils/data/data");
var httpUtil=require("../utils/http/http");


/**
 * Deletes a colour
 *
 * colourID String 
 * no response value expected for this operation
 **/
exports.deleteColour = function(args,res,next) {
  var id=args.colourID.value || null;

  database.deleteColour(
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
 * Loads a colour
 *
 * colourID String 
 * no response value expected for this operation
 **/
exports.getColour = function(args,res,next) {
  var id=args.colourID.value || null;
  database.getColour(
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
 * Loads a list of colours
 *
 * name String  (optional)
 * returns List
 **/
exports.getColours = function(args,res,next) {
  var name=args.name.value || null;

  database.getColours(name).then(
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
 * Adds a colour
 *
 * body Colour 
 * no response value expected for this operation
 **/
exports.postColour = function(args,res,next) {
  var name=args.body.value.name || null;

  database.postColour(
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

