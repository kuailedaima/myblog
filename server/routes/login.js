var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var db = require('../db/db')

router.post('/',(req,res) =>{
    console.log(req.body.useraccount);
    console.log(req.body.userpassword);
    var useraccount = req.body.useraccount;
    var userpassword = req.body.userpassword;
    var sql = 'SELECT * FROM users where account = ' +"'" +useraccount+"'"+'and password= ' +"'" +userpassword+"'" ;
    // var sql = "select * from users where account = '张三' ";
    db.query(sql,[],(results) =>{
        if(results.length ==0) {
            res.send("0"); //返回用户名或密码错误
        } 
        else if(results.length !=0){
            res.send("1");      //返回用户名和密码均正确
        }
        else {
            res.send("2")       //出错了请稍后
        }
    })
});

module.exports = router;