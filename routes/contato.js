const express = require('express')
const router = express.Router();
const ContatoController = require('../controllers/contato')

router.get('/', ContatoController.contatoGet);
router.post('/add', ContatoController.contatoPost);


module.exports= router;