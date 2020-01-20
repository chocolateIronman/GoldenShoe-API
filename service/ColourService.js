'use strict';


/**
 * Deletes a colour
 *
 * colourID String 
 * no response value expected for this operation
 **/
exports.deleteColour = function(colourID) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Loads a colour
 *
 * colourID String 
 * no response value expected for this operation
 **/
exports.getColour = function(colourID) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Loads a list of colours
 *
 * name String  (optional)
 * returns List
 **/
exports.getColours = function(name) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "colour"
}, {
  "name" : "colour"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Adds a colour
 *
 * body Colour 
 * no response value expected for this operation
 **/
exports.postColour = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

