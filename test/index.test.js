const request = require("supertest");

const ProductDao = require('../src/products.dao')
const Product = require('../src/product')
const app = require('../src/app');

ProductDao.initaliseDB();


test("Get Product details by ID - Should return Status:200 ", async () => {
    const res = await request(app)
        .get("/products/11111")
        .expect('content-type', /json/)
        .expect(200);
    expect(res.body.stock_number).toEqual("11111");

});

test("Get Product details by ID ,Product doesnot exist - Should return Status:404", async () => {
    const res = await request(app)
        .get("/products/1111")
        .expect('content-type', /json/)
        .expect(404);
});

test("Update Product details by ID ,Product doesnot exist - Should return Status:404", async () => {
    const body = { stock_number: "111", name: "RS Pro Coil Large", Description: "RS Coil", Price: "£1.99" };
    const res = await request(app)
        .put("/products/111")
        .send(body)
        .expect(404);
});

test("Update Product details by ID ,Product doesnot exist - Should return Status:200", async () => {
    const body = { stock_number: "11111", name: "RS Pro Coil Large", Description: "RS Coil", Price: "£1.99" };
    const res = await request(app)
        .put("/products/11111")
        .send(body)
        .expect(200);
});

test("Create new Product details fails when product exists with stock_number   - Should return Status:400", async () => {
    const body = { stock_number: "11111", name: "RS Pro Coil Large 9", Description: "RS 9 Coil", Price: "£1.99" };
    const res = await request(app)
        .post("/products/")
        .send(body)
        .expect(400);
});

test("Create new Product details when product with stock_number does not exist - Should return Status: 201", async () => {
    const body = { stock_number: "11", name: "RS Pro Coil Large 11", Description: "RS 11 Coil", Price: "£11.99" };
    const res = await request(app)
        .post("/products/")
        .send(body)
        .expect(201);
});

test("Create new Product details fails  due to invalid parameters  - Should return Status:400", async () => {
    const body = { stock_number: "11111", Description: "RS 9 Coil", Price: "£1.99" };
    const res = await request(app)
        .post("/products/")
        .send(body)
        .expect(400);
});
test("Delete not allowed - Returns status code 405", async () => {
    const body = { stock_number: "11111", Description: "RS 9 Coil", Price: "£1.99" };
    const res = await request(app)
        .delete("/products/11111")
        .expect(405);
});

