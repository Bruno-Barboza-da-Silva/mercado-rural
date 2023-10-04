const { Router } = require('express');
const usuarioController = require('../controller/usuarioController');

const router = Router();

router.post('/', usuarioController.index);


module.exports = router;