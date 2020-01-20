'use strict';

var utils = require('../utils/writer.js');
var Category = require('../service/CategoryService');

module.exports.deleteCategory = function deleteCategory (req, res, next) {
  var categoryID = req.swagger.params['categoryID'].value;
  Category.deleteCategory(categoryID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCategories = function getCategories (req, res, next) {
  var name = req.swagger.params['name'].value;
  Category.getCategories(name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCategory = function getCategory (req, res, next) {
  var categoryID = req.swagger.params['categoryID'].value;
  Category.getCategory(categoryID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postCategory = function postCategory (req, res, next) {
  var body = req.swagger.params['body'].value;
  Category.postCategory(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
