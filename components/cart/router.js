const { Router } = require('express');
const { protect, restrictedTo } = require('../../middleware/protect');
const catchHandler = require('../../utils/catchHandler');
const { insertIntoCart, readCart, emptyCart, removeProduct } = require('./controller');

const router = Router();

router.post(
  '/add',
  catchHandler(protect),
  catchHandler(restrictedTo('Customer')),
  catchHandler(insertIntoCart)
);

router.get(
  '/',
  catchHandler(protect),
  catchHandler(restrictedTo('Customer')),
  catchHandler(readCart)
);

router.patch(
  '/empty',
  catchHandler(protect),
  catchHandler(restrictedTo('Customer')),
  catchHandler(emptyCart)
);

router.patch(
  '/remove',
  catchHandler(protect),
  catchHandler(restrictedTo('Customer')),
  catchHandler(removeProduct)
);

module.exports = router;
