const express = require('express')
const Product = require("../src/product");
const ProductDao = require("../src/products.dao")

ProductDao.initaliseDB();

test('Get product by stock number, Product exists in database', () => {

  const getproduct = ProductDao.getProductById("11111");
  console.log("In test get method " + JSON.stringify(getproduct));
  expect(getproduct).toBeTruthy;
  expect(getproduct).toBeInstanceOf(Product);
  expect(getproduct).toEqual({ "stock_number": "11111", "name": "RS Pro Coil", "Description": "RS Coil", "Price": "£1.99" })
});

test('Get product by stock number, Product doesn\'t exits', () => {

  const getproduct = ProductDao.getProductById("1111");
  console.log("In test get method " + JSON.stringify(getproduct));
  expect(getproduct).toBeUndefined();
});

test('Create a New product', () => {
  const newProduct = new Product("17890", "Rs capacitor", "Capacitor", "£1.5");
  const productCreated = ProductDao.createProduct(newProduct);
  console.log("In test Create Product " + JSON.stringify(newProduct));
  expect(productCreated).toBeTruthy
  expect(productCreated).toBeInstanceOf(Product);
  expect(productCreated).toEqual({ "stock_number": "17890", "name": "Rs capacitor", "Description": "Capacitor", "Price": "£1.5" })
});

test('Update Existing product by stock number', () => {

  const updateProduct = new Product("17890", "Rs capacitor", "Capacitor", "£1.85");
  console.log(`In function update ${JSON.stringify(updateProduct)}`)
  const newUpdatedProduct = ProductDao.updateProduct(updateProduct);
  console.log("In test update product " + JSON.stringify(newUpdatedProduct));
  expect(newUpdatedProduct).toBeTruthy();
  expect(newUpdatedProduct).toBeInstanceOf(Product);
  expect(newUpdatedProduct).toEqual(updateProduct);
});

test('Update product by stock number - Product Not exists', () => {

  const updateProduct = new Product("1789", "Rs capacitor", "Capacitor", "£1.85");
  console.log(`In function update ${JSON.stringify(updateProduct)}`)
  expect(() => { ProductDao.updateProduct(updateProduct) }).toThrow(`Product with stock number ${updateProduct.stock_number} not found`);
});