const express = require('express');
const { singup } = require('../controllers/authController');
const router = express.Router();


//auth routes
// /api/singup
router.post('/singup', singup); 

module.exports=router;
