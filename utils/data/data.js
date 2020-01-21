/**
 * Thanks to the Open-Source community for providing this project structure.
**/
"use strict";

var Sql = require("../SQL/sql");
var errorApi = require("../error");

var doGetProducts = async()=>{
    var result = null;
    result = await Sql.getProducts();
    return result;
}
var getProducts = async()=>{
    var result=null;
    
    try{
        result = await doGetProducts();
    } catch(error) {
        console.log(error.message);
        throw errorApi.create500Error("SQL Error");
    }

    return result;
};

function isEmpty(param) {
    return param === undefined || param === null;
}

var doPostProduct=async(name,description,quantity,price,category,colour)=>{
    var result=[];
    result=await Sql.postProduct(name,description,quantity,price,category,colour);
    return result;
}
var postProduct=async(name,description,quantity,price)=>{
    var result=[];
    if(isEmpty(name)) throw errorApi.create400Error("Parameter 'name' is null. ");
    if(isEmpty(description)) throw errorApi.create400Error("Parameter 'description' is null. ");
    if(isEmpty(quantity)) throw errorApi.create400Error("Parameter 'quantity' is null. ");
    if(isEmpty(price)) throw errorApi.create400Error("Parameter 'price' is null. ");
    if(isEmpty(category)) throw errorApi.create400Error("Parameter 'category' is null. ");
    if(isEmpty(colour)) throw errorApi.create400Error("Parameter 'colour' is null. ");

    try{
        result = await doPostProduct(name,description,quantity,price,category,colour);
    }catch(error){
        console.log(error.message);
        throw errorApi.create500Error("SQL Error");
    }

    return result;
}

var doGetProduct = async (id)=>{
    var result = null;
    result = await Sql.getProduct(id);
    return result;
}
var getProduct = async(id)=>{
    var result=null;

    if(isEmpty(id)) throw errorApi.create400Error("Parameter 'id' is null.");

    try{
        result = await doGetProduct(id);
    }catch(error){
        console.log(error.message);
        throw errorApi.create500Error("SQL Error";)
    }

    return result;
}

var doPutProduct = async(id,name,description,quantity,price,category,colour)=>{
    var result = null;
    result= await Sql.putProduct(id,name,description,quantity,price,category,colour);
    return result;
}
var putProduct=async(id,name,description,quantity,price,category,colour)=>{
    var result=null;
    if(isEmpty(id)) throw errorApi.create400Error("Parameter 'id' is null.");
    if(isEmpty(name)) throw errorApi.create400Error("Parameter 'name' is null.");
    if(isEmpty(description)) throw errorApi.create400Error("Parameter 'description' is null.");
    if(isEmpty(quantity)) throw errorApi.create400Error("Parameter 'quantity' is null.");
    if(isEmpty(price)) throw errorApi.create400Error("Parameter 'price' is null.");
    if(isEmpty(category)) throw errorApi.create400Error("Parameter 'category' is null.");
    if(isEmpty(colour)) throw errorApi.create400Error("Parameter 'colour' is null.");

    try{
        result = await doPutProduct(id,name,description,quantity,price,category,colour);
    }catch(error){
        console.log(error.message);
        throw errorApi.create500Error("SQL Error");
    }

    return result;
}

var doDeleteProduct = async(id)=>{
    var result = null;
    result = await Sql.deleteProduct(id);
    return result;
}
var deleteProduct = async(id)=>{
    var result=null;
    
    if(isEmpty(id)) throw errorApi.create400Error("Parameter 'id' is null.");

    try{
        result = await doDeleteProduct(id);
    }catch(error){
        console.log(erorr.message);
        throw errorApi.create500Error("SQL Error");
    }

    return result;
}

//----------------CATEGORY--------------------
var doGetCategories=async()=>{
    var result=null;
    result=await Sql.getCategories();
    return result;
}
var getCategories=async()=>{
    var result=null;
    try{
        result = await doGetCategories();
    }catch(error){
        console.log(error.message);
        throw errorApi.create500Error("SQL Error");
    }

    return result;
}

var doGetCategory = async(id)=>{
    var result=null;
    result=await Sql.getCategory(id);
    return result;
}
var getCategory=async(id)=>{
    var result=null;
   
    if(isEmpty(id)) throw errorApi.create400Error("Parameter 'id' is null.");

    try{
        result=await doGetCategory(id);
    }catch(error){
        console.log(error.message);
        throw errorApi.create500Error("SQL Error");
    }

    return result;
}

var doPostCategory=async(name)=>{
    var result=[];
    result = await Sql.postCategory(name);
    return result;
}
var postCategory=async(name)=>{
    var result=[];
    if(isEmpty(name)) throw errorApi.create400Error("Parameter 'name' is null.");

    try{
        result = await doPostCategory(name);
    }catch(error){
        console.log(error.message);
        throw errorApi.create500Error("SQL Error");
    }

    return result;
}

var doDeleteCategory= async(id)=>{
    var result=null;
    result = await Sql.deleteCategory(id);
    return result;
}
var deleteCategory=async(id)=>{
    var result=null;

    if(isEmpty(id)) throw errorApi.create400Error("Parameter 'id' is null.");

    try{
        result = await doDeleteCategory(id);
    }catch(error){
        console.log(error.message);
        throw errorApi.create500Error("SQL Error");
    }

    return result;
}

//--------------COLOUR----------------------------
var doGetColour=async()=>{
    var result=null;
    result=await Sql.getColours();
    return result;
}
var getColours=async()=>{
    var result=null;
    try{
        result = await doGetColours();
    }catch(error){
        console.log(error.message);
        throw errorApi.create500Error("SQL Error");
    }

    return result;
}

var doGetColour = async(id)=>{
    var result=null;
    result=await Sql.getColour(id);
    return result;
}
var getColour=async(id)=>{
    var result=null;
   
    if(isEmpty(id)) throw errorApi.create400Error("Parameter 'id' is null.");

    try{
        result=await doGetColour(id);
    }catch(error){
        console.log(error.message);
        throw errorApi.create500Error("SQL Error");
    }

    return result;
}

var doPostColour=async(name)=>{
    var result=[];
    result = await Sql.postCategory(name);
    return result;
}
var postColour=async(name)=>{
    var result=[];
    if(isEmpty(name)) throw errorApi.create400Error("Parameter 'name' is null.");

    try{
        result = await doPostColour(name);
    }catch(error){
        console.log(error.message);
        throw errorApi.create500Error("SQL Error");
    }

    return result;
}

var doDeleteColour= async(id)=>{
    var result=null;
    result = await Sql.deleteColour(id);
    return result;
}
var deleteColour=async(id)=>{
    var result=null;

    if(isEmpty(id)) throw errorApi.create400Error("Parameter 'id' is null.");

    try{
        result = await doDeleteColour(id);
    }catch(error){
        console.log(error.message);
        throw errorApi.create500Error("SQL Error");
    }

    return result;
}

module.exports = {
    getProducts:getProducts,
    postProduct:postProduct,
    getProduct:getProduct,
    putProduct:putProduct,
    deleteProduct:deleteProduct,

    getCategories:getCategories,
    postCategory:postCategory,
    getCategory:getCategory,
    deleteCategory:deleteCategory,

    getColours:getColours,
    postColour:postColour,
    getColour:getColour,
    deleteColour:deleteColour
}