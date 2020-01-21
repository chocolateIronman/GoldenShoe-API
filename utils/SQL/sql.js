var genApi = require("../queryGeneration/gen")(__dirname+"/Scripts");
dbApi = require("../database/databaseService");

class Sql {
    static async getProducts(){
        var result= null;

        var parameters=[];

        //single query wrapped in multi query stuff
        var query = genApi.gen("getProducts",parameters);
        var responses = await dbApi.multiQuery([query]);

        if(responses[0].rows.length>0){
            result = responses[0].rows;
        }

        return result;
    }

    static async postProduct(name,description,quantity,price,category,colour){
        var result=[];

        var createProductQuery=genApi.gen("postProduct",[name,description,quantity,price]);
        var responses = await dbApi.multiQuery([createProductQuery]);

        if(responses.length>0){
            var createProductResponse = responses[0];
            if(createProductResponse.rows.length>0){
                result = createProductResponse.rows[0];

                var query1 = genApi.gen("createProductToCategoryMapping",[result.id,category]);

                var response1= await dbApi.multiQuery([query1]);

                var query2 = genApi.gen("createProductToColourMapping",[result.id,colour]);

                var response2 = await dbApi.multiQuery([query2]);

                if(response1.length>0){
                    if(response1[0].rows.length>0){
                        result.category=response1[0].rows.id;
                    }
                }
                if(response2.length>0){
                    if(response2[0].rows.length>0){
                        result.colour=response2[0].rows.id;
                    }
                }
            }
        }
        return result;
    }

    static async getProduct(id){
        var result = null;
        var parameters=[id];

        //single query wrapped in multi query stuff
        var query = genApi.gen("getProduct",parameters);
        var response = await dbApi.multiQuery([query]);

        if(response[0].rows.length>0){
            result=response[0].rows;
        }
        return result;
    }

    static async putProduct(id,name,description,quantity,price,category,colour){
        var result = [];

        var updateProductQuery = genApi.gen("putProduct",[id,name,description,quantity,price]);
        var responses = await dbApi.multiQuery([updateProductQuery]);

        if(responses.length>0){
            var putProductResponse = responses[0];
            if(putProductResponse.rows.length>0){
                result=putProductResponse.rows[0];

                var queries=[];
                queries.push(genApi.gen("deleteProductToCategoryMapping",[id]));
                queries.push(genApi.gen("createProductToCategoryMapping",[id,category]));
                queries.push(genApi.gen("deleteProductToColourMapping",[id]));
                queries.push(genApi.gen("createProductToColourMapping",[id,colour]));

                var responses = await dbApi.multiQuery(queries);
            }
        }
        return result;
    }

    static async deleteProduct(id){
        var result = null;
        var parameters = [id];

        //single query wrapped in multi query stuff
        var query = genApi.gen("deleteProduct",parameters);
        var responses = await dbApi.multiQuery([query]);

        if(responses[0].rows.length>0){
            result=responses[0].rows;
        }

        return result;
    }

    //------------CATEGORY-----------------
    static async getCategories(){
        var result= null;
        var parameters=[];

        var query = genApi.gen("getCategories",parameters);
        var responses = await dbApi.multiQuery([query]);

        if(responses[0].rows.length>0){
            result = responses[0].rows;
        }

        return result;
    }

    static async getCategory(id){
        var result = null;
        var parameters=[id];

        //signle query wrapped in multi query stuff
        var query = genApi.gen("getCategory",parameters);
        var responses = await dbApi.multiQuery([query]);

        if(responses[0].rows.length>0){
            result = responses[0].rows;
        }

        return result;
    }

    static async postCategory(name){
        var result=[];
        var parameters=[name];

        //single query wrapped in multi query stuff
        var query = genApi.gen("postCategory",parameters);
        var responses = await dbApi.multiQuery([query]);

        if(responses[0].rows.length>0){
            result = responses[0].rows;
        }

        return result;
    }

    static async deleteCategory(id){
        var result =null;
        var parameters=[id];

        //single query wrapped in multi query stuff
        var query=genApi.gen("deleteCategory",parameters);
        var responses = await dbApi.multiQuery([query]);

        if(response[0].rows.length>0){
            result = responses[0].rows;
        }

        return result;
    }

    //---------COLOUR------------
    static async getColours(){
        var result= null;
        var parameters=[];

        var query = genApi.gen("getColours",parameters);
        var responses = await dbApi.multiQuery([query]);

        if(responses[0].rows.length>0){
            result = responses[0].rows;
        }

        return result;
    }

    static async getColour(id){
        var result = null;
        var parameters=[id];

        //signle query wrapped in multi query stuff
        var query = genApi.gen("getColour",parameters);
        var responses = await dbApi.multiQuery([query]);

        if(responses[0].rows.length>0){
            result = responses[0].rows;
        }

        return result;
    }

    static async postColour(name){
        var result=[];
        var parameters=[name];

        //single query wrapped in multi query stuff
        var query = genApi.gen("postColour",parameters);
        var responses = await dbApi.multiQuery([query]);

        if(responses[0].rows.length>0){
            result = responses[0].rows;
        }

        return result;
    }

    static async deleteColour(id){
        var result =null;
        var parameters=[id];

        //single query wrapped in multi query stuff
        var query=genApi.gen("deleteColour",parameters);
        var responses = await dbApi.multiQuery([query]);

        if(response[0].rows.length>0){
            result = responses[0].rows;
        }

        return result;
    }
}


