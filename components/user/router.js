const { Router } = require('express');
const catchHandler = require('../../utils/catchHandler');
const {
  insertUser,
  readAllUsers,
  readUser,
  modifyUser,
  removeUser,
} = require('./controller');

const router = Router();

router.post('/', catchHandler(insertUser));
router.get('/', catchHandler(readAllUsers));
router.get('/:id', catchHandler(readUser));
router.patch('/:id', catchHandler(modifyUser));
router.delete('/:id', catchHandler(removeUser));

module.exports = router;
