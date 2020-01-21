'use strict';

var utils = require('../utils/writer.js');
var Colour = require('../service/ColourService');

module.exports.deleteColour = function deleteColour (req, res, next) {
  Colour.deleteColour(req.swagger.params,res,next);
};

module.exports.getColour = function getColour (req, res, next) {
  Colour.getColour(req.swagger.params,res,next);
};

module.exports.getColours = function getColours (req, res, next) {
  Colour.getColours(req.swagger.params,res,next);
};

module.exports.postColour = function postColour (req, res, next) {
  Colour.postColour(req.swagger.params,res,next);
};
