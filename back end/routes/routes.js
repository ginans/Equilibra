const express = require('express')

const { createUsuario } = require("../controller/createUserClient/createUserClient.js")
const { checkName } = require("../controller/searchData/searchName.js")
const { checkEmail } = require("../controller/searchData/searchEmail.js")
const { loginUserClient } = require("../controller/loginUserClient/loginUserClient.js")


const router = express.Router()

 
router.get('/checkEmail/:email', checkEmail)
router.get('/checkName/:name', checkName)
router.post('/createUser', createUsuario)
router.post('/loginUserClient', loginUserClient)

module.exports = {
    router:router
} 