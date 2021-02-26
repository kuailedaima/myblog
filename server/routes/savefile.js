var express = require('express');
var router = express.Router();

router.post('/',(req,res) =>{
    console.log(req.body.image);
    console.log("uuu");
    res.send("图片")
});

module.exports = router;