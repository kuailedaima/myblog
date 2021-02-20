var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var db = require('../db/db')

router.post('/',(req,res) =>{
    var usernickname = req.body.nickname;
    var useraccount = req.body.account;
    var userpassword = req.body.password;
    var sql = 'SELECT * FROM users where account = ' +"'" +useraccount+"'";
    var sqladd = 'INSERT INTO users(account,password,nickname) VALUES("'+useraccount+'","'+userpassword+'","'+usernickname+'")'
    // var sqladd = 'INSERT INTO users(account,password,nickname) VALUES(1,1,1)'
    // var sqladd = "INSERT INTO users(account,password,nickname) VALUES('天天','55','09')"
    // let tag =0;     //设置账号是否存在
    // if(tag==0) {
    //     db.query(sql,[],(err,results,row) =>{ 
    //         if(results.length !=0){
    //             tag = 1;      //用户名已经存在
    //         }
    //     });
    // }
    db.query(sql,[],(results) =>{ 
        if(results.length !=0){
            res.send("-1") //发送用户名已经存在
        }
        else {
            db.query(sqladd,[],(results) =>{
                console.log(results);
                if(results.length !=0)
                    res.send("1"); //添加用户名密码成功
                else res.send("0") //添加失败
            })
        }
    });
    // console.log(tag);
    // res.send("0");
});

module.exports = router;

