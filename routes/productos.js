const { Router } = require('express')
const Contenendor = require('../contenedor')
const express = require('express')

const products = new Contenendor('products.json');


const router = Router()

function auth(req, res, next) {
    if('admin' in req.headers & 'admin' == true) {
        next()
    }else {
        res.status(400)
        res.send('No admin')
    }
}

router.get('/', (req, res) => {
    res.json(products.getAll())
})

router.post('/', auth, (req, res) => {
    res.json(products.save(req.body))
})
router.put('/:id', (req, res) => {
    const id = req.params.id
    res.json(products.editById(req.body, id))
})
router.delete('/:id', (req, res) => {
    const id = req.params.id
    res.json(products.deleteByID(id))
})




module.exports = router;