const { Router } = require('express');
const catchHandler = require('../../utils/catchHandler');
const {
  insertShop,
  readAllShops,
  readShop,
  modifyShop,
  removeShop,
} = require('./controller');

const router = Router();

router.post('/', catchHandler(insertShop));
router.get('/', catchHandler(readAllShops));
router.get('/:id', catchHandler(readShop));
router.patch('/:id', catchHandler(modifyShop));
router.delete('/:id', catchHandler(removeShop));

module.exports = router;
