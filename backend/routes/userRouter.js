const Router = require('express');
const router = new Router();
const UserController = require('../controllers/UserController');

router.post('/', UserController.addUser);
router.get('/', UserController.getUser);

module.exports = router;
