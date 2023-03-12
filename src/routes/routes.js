const express = require('express');
const router = express.Router();

const Decode = require('../methods/methods');

router.post('/decode', (req, res)=>{
    const code = req.body;
    const decode = Decode(code);
    res.json(decode);
});

module.exports = router;