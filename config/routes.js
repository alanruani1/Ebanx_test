const express = require('express')
var controller = require('./Controller')
const routes = express.Router()

module.exports = routes

let db = []

routes.post('/reset', (req, res) => {
    controller.reset(req, res, db)
})

routes.get('/balance', (req, res) => {
    controller.balance(req, res, db)

})

routes.post('/event', (req, res) => {
    controller.events(req, res, db)

})