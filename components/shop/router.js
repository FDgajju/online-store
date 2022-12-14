const { Router } = require('express');
const { protect, restrictedTo } = require('../../middleware/protect');
const catchHandler = require('../../utils/catchHandler');
const {
  insertShop,
  readAllShops,
  readShop,
  modifyShop,
  removeShop,
} = require('./controller');

const router = Router();

router.post(
  '/',
  catchHandler(protect),
  restrictedTo('Seller'),
  catchHandler(insertShop)
);

router.get('/all-shops', catchHandler(readAllShops));
router.get('/:id', catchHandler(readShop));

router.patch(
  '/my-shop/update/:id',
  catchHandler(protect),
  restrictedTo('Seller'),
  catchHandler(modifyShop)
);

router.delete(
  '/my-shop/delete/:id',
  catchHandler(protect),
  restrictedTo('Seller'),
  catchHandler(removeShop)
);

module.exports = router;
