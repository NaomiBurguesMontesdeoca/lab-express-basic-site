const mongoose = require('mongoose')
const Product = require('../models/Product.model')

const databaseName = 'Products-22'
const connectionString = `mongodb://127.0.0.1/${databaseName}`
const data = require('../products.json')

mongoose
    .connect(connectionString)
    .then(connectionInfo => {
        console.log(`Connected to Mongo! Database name: "${connectionInfo.connections[0].name}"`)
        return Product.create(data)

    })
    .then(() => { console.log('estoy creando data') })
    .catch(err => console.error('Error connecting to mongo', err))

