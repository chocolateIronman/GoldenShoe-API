'use strict';


/**
 * Deletes a product
 *
 * productID String 
 * no response value expected for this operation
 **/
exports.deleteProduct = function(productID) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Loads a product
 *
 * productID String 
 * no response value expected for this operation
 **/
exports.getProduct = function(productID) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Loads a list of products
 *
 * returns List
 **/
exports.getProducts = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "name",
  "category" : "uuid",
  "description" : "description",
  "quantity" : 1,
  "price" : "price",
  "colour" : "colour"
}, {
  "name" : "name",
  "category" : "uuid",
  "description" : "description",
  "quantity" : 1,
  "price" : "price",
  "colour" : "colour"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Adds a product
 *
 * body Product 
 * returns Product
 **/
exports.postProduct = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "name",
  "category" : "uuid",
  "description" : "description",
  "quantity" : 1,
  "price" : "price",
  "colour" : "colour"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Updates a product
 *
 * productID String 
 * body Product 
 * no response value expected for this operation
 **/
exports.putProduct = function(productID,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

