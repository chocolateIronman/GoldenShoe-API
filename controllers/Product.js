'use strict';

var utils = require('../utils/writer.js');
var Product = require('../service/ProductService');

module.exports.deleteProduct = function deleteProduct (req, res, next) {
  var productID = req.swagger.params['ProductID'].value;
  Product.deleteProduct(productID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProduct = function getProduct (req, res, next) {
  var productID = req.swagger.params['ProductID'].value;
  Product.getProduct(productID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProducts = function getProducts (req, res, next) {
  Product.getProducts()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postProduct = function postProduct (req, res, next) {
  var body = req.swagger.params['body'].value;
  Product.postProduct(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putProduct = function putProduct (req, res, next) {
  var productID = req.swagger.params['ProductID'].value;
  var body = req.swagger.params['body'].value;
  Product.putProduct(productID,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
