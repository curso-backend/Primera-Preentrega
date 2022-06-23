const { Router } = require('express')
const Contenendor = require('../contenedor')
const express = require('express')

const carts = new Contenendor('carts.json');


const router = Router()

router.get('/', (req, res) => {
    res.json(carts.getAll())
})

router.post('/', (req, res) => {
    obj = {...req.body, ...{ products: []} }
    res.json(carts.save(obj))
})
router.post('/:id/products', (req, res) => {
    
    const product = req.body
    const cartID = req.params.id
    const cart = carts.getByID(cartID)

    cart.products.push(product)
    const newObj = carts.editByBody(cart, cartID)

    res.json(newObj)
})



module.exports = router;