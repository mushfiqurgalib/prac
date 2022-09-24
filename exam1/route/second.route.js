const express =require('express');

const controller =  require('../controller/second.controller');

const router = express.Router();

router.get('/', controller.getStatus);

router.post('/', controller.createStatus);

module.exports=router;

