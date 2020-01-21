'use strict';

var database = require("../utils/data/data");
var httpUtil = require("../utils/http/http");

/**
 * Deletes a product
 *
 * productID String 
 * no response value expected for this operation
 **/
exports.deleteProduct = function(args,res,next) {
  var id=args.ProductID.value || null;

  database.deleteProduct(
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
 * Loads a product
 *
 * productID String 
 * no response value expected for this operation
 **/
exports.getProduct = function(args,res,next) {
  var id=args.ProductID.value || null;
  database.getProduct(
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
 * Loads a list of products
 *
 * returns List
 **/
exports.getProducts = function(args,res,next) {
  database.getProducts(

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
 * Adds a product
 *
 * body Product 
 * returns Product
 **/
exports.postProduct = function(args,res,next) {
  var name=args.body.value.name || null;
  var description=args.body.value.description || null;
  var quantity=args.body.value.quantity || null;
  var price=args.body.value.price || null;
  var category=args.body.value.category || null;
  var colour=args.body.value.colour || null;

  database.postProduct(
    name,
    description,
    quantity,
    price,
    category,
    colour
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
 * Updates a product
 *
 * productID String 
 * body Product 
 * no response value expected for this operation
 **/
exports.putProduct = function(args,res,next) {
  var id=args.ProductID.value || null;
  var name=args.body.value.name || null;
  var description=args.body.value.description || null;
  var quantity=args.body.value.quantity || null;
  var price=args.body.value.price || null;
  var category=args.body.value.category || null;
  var colour=args.body.value.colour || null;

  database.putProduct(
    id,
    name,
    description,
    quantity,
    price,
    category,
    colour
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

