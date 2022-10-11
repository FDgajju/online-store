const { Router } = require('express');
const { protect, restrictedTo } = require('../../middleware/protect');
const catchHandler = require('../../utils/catchHandler');
const {
  insertProduct,
  readAllProducts,
  readProduct,
  modifyProduct,
  removeProduct,
} = require('./controller');

const router = Router();

router.post(
  '/',
  catchHandler(protect),
  catchHandler(restrictedTo('Seller')),
  catchHandler(insertProduct)
);

router.get('/all-products', catchHandler(readAllProducts));
router.get('/:id', catchHandler(readProduct));

router.patch(
  '/update/:id',
  catchHandler(protect),
  catchHandler(restrictedTo('Seller')),
  catchHandler(modifyProduct)
);

router.delete(
  '/delete/:id',
  catchHandler(protect),
  catchHandler(restrictedTo('Seller')),
  catchHandler(removeProduct)
);

module.exports = router;
