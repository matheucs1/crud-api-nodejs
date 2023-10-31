const { Router } = require('express');

const UserController = require('./controller/UserController');

const router = Router();

router.get('/user-list', UserController.listUsers)
router.post('/create', UserController.createUser);
router.put('/update/:id', UserController.updateUser);
router.delete('/delete/:id', UserController.deleteUser);

module.exports = router;