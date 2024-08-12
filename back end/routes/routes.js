const express = require('express')

const { createUsuario } = require("../controller/createUserClient/createUserClient.js")
const { checkName } = require("../controller/searchData/client/searchName.js")
const { checkEmail } = require("../controller/searchData/client/searchEmail.js")
const { loginUserClient } = require("../controller/loginUserClient/loginUserClient.js")
const { loginUserProfessional } = require("../controller/loginUserProfessional/loginUserProfessional.js")

const { createUserProfessional } = require("../controller/createUserProfessional/createUserProfessional.js")
const { checkEmailUserProfessional } = require("../controller/searchData/professional/searchEmailProfessional.js")
const { checkNameUserProfessional } = require("../controller/searchData/professional/searchNameProfessional.js")


const router = express.Router()

 
router.get('/checkEmail/:email', checkEmail)
router.get('/checkName/:name', checkName)


router.get('/checkEmailProfessional/:email', checkEmailUserProfessional)
router.get('/checkNameProfessional/:name', checkNameUserProfessional)


router.post('/createUser', createUsuario)
router.post('/loginUserClient', loginUserClient)
router.post('/loginUserProfessional', loginUserProfessional)
router.post('/createUserProfessional', createUserProfessional)

module.exports = {
    router:router
}