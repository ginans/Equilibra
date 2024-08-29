const express = require('express');
const { createUsuario } = require("../controller/createUserClient/createUserClient.js");
const { checkName } = require("../controller/searchData/client/searchName.js");
const { checkEmail } = require("../controller/searchData/client/searchEmail.js");
const { loginUserClient } = require("../controller/loginUserClient/loginUserClient.js");
const { loginUserProfessional } = require("../controller/loginUserProfessional/loginUserProfessional.js");
const { createUserProfessional } = require("../controller/createUserProfessional/createUserProfessional.js");
const { getUserClientById } = require("../controller/getData/getdataUserClient.js");
const { getUserProfessionalById } = require("../controller/getData/getdataUserProfessional.js");
const { createPregunta } = require('../controller/foro/createPregunta.js');
const { getPreguntas } = require('../controller/getData/getPreguntas.js');
const { createRespuesta } = require('../controller/foro/createRespuesta.js');
const { toggleLike } = require('../controller/foro/toggleLike.js');
const authMiddleware = require('../middleware/auth.js');

const router = express.Router();

router.get('/checkEmail/:email', checkEmail);
router.get('/checkName/:name', checkName);
router.get('/getUserClientById', authMiddleware, getUserClientById);
router.get('/getdataUserProfessional/:token', getUserProfessionalById);

router.post('/createUser', createUsuario);
router.post('/loginUserClient', loginUserClient);
router.post('/loginUserProfessional', loginUserProfessional);
router.post('/createUserProfessional', createUserProfessional);

// Foro
router.post('/preguntas', authMiddleware, createPregunta);
router.post('/respuestas', authMiddleware, createRespuesta);
router.get('/preguntas', getPreguntas);
router.post('/likes', authMiddleware, toggleLike);

module.exports = {
    router: router
};
