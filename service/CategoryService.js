'use strict';


/**
 * Deletes a category
 *
 * categoryID String 
 * no response value expected for this operation
 **/
exports.deleteCategory = function(categoryID) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Loads a list of categories
 *
 * name String  (optional)
 * returns List
 **/
exports.getCategories = function(name) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "category"
}, {
  "name" : "category"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Loads a project category
 *
 * categoryID String 
 * no response value expected for this operation
 **/
exports.getCategory = function(categoryID) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Adds a category
 *
 * body Category 
 * no response value expected for this operation
 **/
exports.postCategory = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

