const { Router } = require('express');
const { protect, restrictedTo } = require('../../middleware/protect');
const catchHandler = require('../../utils/catchHandler');
const { insertIntoCart, readCart } = require('./controller');

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

module.exports = router;
