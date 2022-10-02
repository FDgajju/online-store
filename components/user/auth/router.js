const { Router } = require('express');
const catchHandler = require('../../../utils/catchHandler');
const { signUp, login } = require('./controller');

const router = Router();

router.post('/:type/signup', catchHandler(signUp));
router.post('/login', catchHandler(login));

module.exports = router;
