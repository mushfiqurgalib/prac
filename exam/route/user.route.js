const express =require('express');

const controller =  require('../controller/user.controller');

const router = express.Router();

router.get('/', controller.getUsers);

router.post('/', controller.createUser);

module.exports=router;

