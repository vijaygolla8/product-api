const Joi = require("Joi");
class Product{
    
        stock_number;
        name;
        Description;
        Price
    
        constructor(stock_number,name,description,price){
            this.stock_number = stock_number;
            this.name = name;
            this.Description = description;
            this.Price = price
        }

        static productSchema = Joi.object({
            stock_number:Joi.string().required().max(10),
            name:Joi.string().required().max(25),
            Description:Joi.string().required().max(250),
            Price:Joi.string().required().max(8)
        })
        
}
module.exports = Product;