const express = require('express')
const path = require('path')
const app = express()

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

require('./db/db-ironshop')

const data = require('./products.json')

const Product = require('./models/Product.model')


app.get('/', (req, res) => {
    res.render('index-page')
})


app.get('/tienda', (req, res) => {

    Product
        .find()
        .then(allProductsFromDB => {
            res.render('tienda', { products: allProductsFromDB })
        })
        .catch(err => console.log(err))

})



app.listen(5005, () => console.log('escuhando en el puerto 5005'))

