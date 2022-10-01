const { Router } = require('express');
const { restrictedTo, protect } = require('../../middleware/protect');
const catchHandler = require('../../utils/catchHandler');
const {
  insertUser,
  readAllUsers,
  readUser,
  modifyUser,
  removeUser,
} = require('./controller');

const router = Router();

router.post(
  '/',
  catchHandler(protect),
  catchHandler(restrictedTo('Admin')),
  catchHandler(insertUser)
);

router.get(
  '/',
  catchHandler(protect),
  catchHandler(restrictedTo('Admin')),
  catchHandler(readAllUsers)
);

router.get('/profile', catchHandler(protect), catchHandler(readUser));

router.patch(
  '/update-profile',
  catchHandler(protect),
  catchHandler(modifyUser)
);
router.delete(
  '/delete-profile',
  catchHandler(protect),
  catchHandler(removeUser)
);

module.exports = router;
