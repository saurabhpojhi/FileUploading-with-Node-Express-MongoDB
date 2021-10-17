
const User = require('../model/user.model');

// const multer  = require('multer');
const upload = require('../midleware/profile');

const express = require('express')
const router = express.Router();
//CURD operation

const path = require('path');

router.post("",upload.single('profile'), async (req, res)=>{
    return res.send(req.body)
})

module.exports = router;

