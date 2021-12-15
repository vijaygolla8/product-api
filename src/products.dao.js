const express = require('express')
const Product = require("./product");

let products; // products data

class ProductDao {

    static initaliseDB() {
        products = [
            new Product("11111", "RS Pro Coil", "RS Coil", "£1.99"),
            new Product("22345", "RS Pro Heater X", "RS Heater", "£2.99")
        ]
    }

    static getProductById(id) {

        const product = products.find(c => c.stock_number === id);
        console.log("in getProductById method..." + JSON.stringify(product))
        return (product);

    }

    static createProduct(newProduct) {
        const product = this.getProductById(newProduct.stock_number);
        if (!product) {
            products.push(newProduct);
            console.log(newProduct);
            return newProduct;
        }
        else {
            console.log(`Product with this Stock number ${newProduct.stock_number} exists`);
            throw new Error(`Product with this Stock number ${newProduct.stock_number} exists`);
        }
    }

    static updateProduct(updateProduct) {
        //update if exists or throw error 
        const product = this.getProductById(updateProduct.stock_number);
        if (!product)
            throw new Error(`Product with stock number ${updateProduct.stock_number} not found`);

        product.stock_number = updateProduct.stock_number;
        product.name = updateProduct.name;
        product.Description = updateProduct.Description;
        product.Price = updateProduct.Price;
        return product;

    }
};
module.exports = ProductDao;
