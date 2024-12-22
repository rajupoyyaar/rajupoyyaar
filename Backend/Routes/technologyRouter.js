const express = require('express')
const Router = express.Router()

const { createFamiliarTechnology,fetchFamiliarTechnology } = require('../Controller/technologyController') 
const {addMessage} = require("../Controller/MessageController")

Router.post('/message', addMessage)
Router.post('/', createFamiliarTechnology)
Router.get('/', fetchFamiliarTechnology)

module.exports = Router
