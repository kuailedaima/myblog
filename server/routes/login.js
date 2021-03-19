var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var db = require('../db/db')
const jwt =require('jsonwebtoken')

router.post('/',(req,res) =>{
    console.log(req.body.username);
    console.log(req.body.password);
    var useraccount = req.body.username;
    var userpassword = req.body.password;
    var sql = 'SELECT * FROM users where account = ' +"'" +useraccount+"'"+'and password= ' +"'" +userpassword+"'" ;
    // var sql = "select * from users where account = '张三' ";
    db.query(sql,[],(results) =>{
        if(results.length ==0) { //返回用户名或密码错误
            res.send({
                data:{
                    username:useraccount,
                },
                meta:{
                    msg:"用户名或密码错误",
                    status:202
                }
            });      
        } 
        else if(results.length !=0){ //返回用户名和密码均正确
            //生成token
            const token = jwt.sign({useraccount},'blog');
            console.log(token);
            res.send({
                data:{
                    username:useraccount,
                    token:token
                },
                meta:{
                    msg:"登录成功",
                    status:200
                }
            });      
        }
        else {          //出错了请稍后
            res.send({
                data:{
                    username:useraccount,
                },
                meta:{
                    msg:"出错了请稍后",
                    status:404
                }
            });   
        }
    })
});

module.exports = router;