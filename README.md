# product-service

## Overview

Service to provide the single source of truth for: Product information \
Supports GET, POST, PUT operations,
basic schema validations,
using in-memory database.

# Local Development

### Setup
npm install

### To Test
npm test

### To Run
node src/index.js \
or \
npm start

then open a browser and go to localhost:8080/products/11111

### Example Calls
curl http://localhost:8080/products \
    returns "{
    "stock_number": "11111",
    "name": "RS Pro Coil",
    "Description": "RS Coil",
    "Price": "£1.99"
}" \
with status :200 OK

curl -X POST -H "Content-Type: application/json" \
 -d '{"stock_number":"12345","name":"RS Pro Batteries","Description":"RS Batteries","Price":"£1.99"}' \
 http://localhost:8080/products \
    returns "{
    "stock_number": "12345",
    "name": "RS Pro Batteries",
    "Description": "RS Batteries",
    "Price": "£1.99"
}" \
Status :201 Created

curl -X PUT -H "Content-Type: application/json" \
 -d '{"stock_number":"12345","name":"RS Pro Batteries","Description":"RS Batteries","Price":"£2.99"}' \
 http://localhost:8080/products/12345  \
    returns "{
    "stock_number": "12345",
    "name": "RS Pro Batteries",
    "Description": "RS Batteries",
    "Price": "£2.99"
}" \
with Status : 200 Ok

### References
https://www.youtube.com/watch?v=TlB_eWDSMt4&t=2s

https://github.com/nedssoft/sequelize-with-postgres-tutorial

https://jestjs.io/docs/expect

https://www.npmjs.com/package/joi

https://expressjs.com/en/api.html#req 
