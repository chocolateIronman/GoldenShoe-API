'use strict';

var utils = require('../utils/writer.js');
var Colour = require('../service/ColourService');

module.exports.deleteColour = function deleteColour (req, res, next) {
  var colourID = req.swagger.params['colourID'].value;
  Colour.deleteColour(colourID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getColour = function getColour (req, res, next) {
  var colourID = req.swagger.params['colourID'].value;
  Colour.getColour(colourID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getColours = function getColours (req, res, next) {
  var name = req.swagger.params['name'].value;
  Colour.getColours(name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postColour = function postColour (req, res, next) {
  var body = req.swagger.params['body'].value;
  Colour.postColour(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
