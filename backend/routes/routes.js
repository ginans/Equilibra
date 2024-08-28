const express = require('express')

const { createUsuario } = require("../controller/createUserClient/createUserClient.js")
const { checkName } = require("../controller/searchData/client/searchName.js")
const { checkEmail } = require("../controller/searchData/client/searchEmail.js")
const { loginUserClient } = require("../controller/loginUserClient/loginUserClient.js")
const { loginUserProfessional } = require("../controller/loginUserProfessional/loginUserProfessional.js")

const { createUserProfessional } = require("../controller/createUserProfessional/createUserProfessional.js")
const { checkEmailUserProfessional } = require("../controller/searchData/professional/searchEmailProfessional.js")
const { checkNameUserProfessional } = require("../controller/searchData/professional/searchNameProfessional.js")

const { getUserClientById } =require("../controller/getData/getdataUserClient.js")
const { getUserProfessionalById } = require("../controller/getData/getdataUserProfessional.js")

const videoController = require("../controller/galeriaEntrenamiento/videoController.js");

const createPregunta = require('../controller/foro/createPregunta.js');
const getPreguntas = require('../controller/getData/getPreguntas.js');
const createRespuesta = require('../controller/foro/createRespuesta.js');
const toggleLike = require('../controller/foro/toggleLike.js');
const authMiddleware = require('../middleware/auth.js');

const router = express.Router()
const { getAllArticles, getArticleById, createArticle } = require("../controller/educationPage/articlesController.js");
const { getAllNoticias, getNoticiaById, createNoticia } = require("../controller/noticias/noticiascontroller.js");


router.get('/checkEmail/:email', checkEmail)
router.get('/checkName/:name', checkName)
router.get('/getUserClientById/:token', getUserClientById)
router.get('/getdataUserProfessional/:token', getUserProfessionalById)


router.get('/checkEmailProfessional/:email', checkEmailUserProfessional)
router.get('/checkNameProfessional/:name', checkNameUserProfessional)


router.post('/createUser', createUsuario)
router.post('/loginUserClient', loginUserClient)
router.post('/loginUserProfessional', loginUserProfessional)
router.post('/createUserProfessional', createUserProfessional)

const noticiasController = require('../controller/landingPage/noticiasController.js');

//foro

router.post('/preguntas', createPregunta);
router.post('/respuestas', createRespuesta);
router.get('/preguntas', getPreguntas);
router.post('/likes', toggleLike);
router.get("/articles", getAllArticles);
router.get("/articles/:id", getArticleById);
router.post("/articles", createArticle);
router.get("/noticias", getAllNoticias);
router.post("/noticias", createNoticia);


//Galeria Entrenamiento
router.get('/api/videos', videoController.getVideos);

// Rutas protegidas (requieren autenticación)
router.post('/api/videos', videoController.createVideo);
router.delete('/api/videos/:id', videoController.deleteVideo);
router.put('/api/videos/:id', videoController.updateVideo);

router.get('/api/noticias', noticiasController.getNoticias);

module.exports = {
    router:router
}