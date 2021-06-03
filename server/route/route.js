const validateUser = require('../middle/validateUsers')
const route = express.Router()
const express = require('express')
const controller = require('../control/head')





route.post('/addUser', validateUser, controller.addUser)
route.post('/updateUser/:id', validateUser, controller.updateUser)
route.get('/singleUser/:id', controller.getSingleUser)
route.get('/deleteUser/:id', controller.deleteUser)
































//idk im lost send help//