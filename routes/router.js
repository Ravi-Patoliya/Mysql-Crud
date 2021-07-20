const { route } = require('../../jayesh/product_list/server/controllers/api');
const userdata = require('../models/userdata');

module.exports = app =>{
const express =require('express');
const router =express.Router();
var userData = require('../controllers/controller')

router.get('/',userData.getData);
router.get('/:id',userData.findById);
router.post('/',userData.createData);
router.put('/:id',userData.UpdateData);
router.delete('/:id',userData.deleteUser);

app.use('/api',router)
}