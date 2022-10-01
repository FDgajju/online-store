const { Router } = require('express');
const { protect } = require('../../middleware/protect');
const catchHandler = require('../../utils/catchHandler');
const {
  insertShop,
  readAllShops,
  readShop,
  modifyShop,
  removeShop,
} = require('./controller');

const router = Router();

router.post('/', catchHandler(protect), catchHandler(insertShop));
router.get('/all-shops', catchHandler(readAllShops));
router.get('/:id', catchHandler(readShop));
router.patch(
  '/my-shop/update/:id',
  catchHandler(protect),
  catchHandler(modifyShop)
);

router.delete(
  '/my-shop/delete/:id',
  catchHandler(protect),
  catchHandler(removeShop)
);

module.exports = router;
