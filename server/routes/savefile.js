var express = require('express');
var router = express.Router();
const multiparty = require('multiparty');   //引入multiparty插件
const fs = require('fs')


router.post('/',(req,res) =>{
    let form = new multiparty.Form();    //实例化该插件
    var path = require('path');
    form.uploadDir=path.resolve(__dirname,'../file/image/blogillstration');
    console.log(form.uploadDir);
    // form.uploadDir='../file/image/blogillstration/'
    form.parse(req,(err,fields,files)=>{
        var filesTmp = JSON.stringify(files, null, 2);
        // var fileso = JSON.parse(filesTmp)
        // console.log(files);
        // // console.log(fileso);
        // console.log('111111111111');
        // console.log(files[1][0].path);
        
        // console.log(filesTmp);

        if(err){
            // res.json({
            //   status:"1",
            //   msg:"上传失败！"+err
            // });
            console.log(err);
          }else{
            console.log('parse files: ' + filesTmp);
            // var inputFile = files['filenames'][0];
           // 保存上传文件
           const imgurl = {};
           let i=1;
           console.log('------------');
           for(var inputFile in files){
             console.log(files[inputFile]);
             console.log(inputFile);
             imgurl[inputFile]=files[inputFile][0].path
           }
           console.log(imgurl);
           res.send(imgurl)
            // files.forEach(function(inputFile) {
            //     //重命名为真实文件名
            //     fs.renameSync(inputFile[0].path, form.uploadDir +"/" + inputFile[0].originalFilename,
            //     function(err) {
            //         if (err) {
            //             console.log('rename error: ' + err);
            //         } else {
            //             console.log('rename ok');
            //         }
            //     });
            // });

            // res.json({ 
            //   status:"0",
            //   msg:"上传成功！",
            //   personPicture: files.file.path   //存到数据库中的picture的路径（绝对路径）
            // });
            // console.log(files.file.path);
          }
    })
    // form.parse(req); //利用parse()方法来解析FormData数据。
    // form.on('field',(name,value)=>{ //field可获取普通数据信息。
    //     console.log('普通数据信息:',name,value);
    // });
    // form.on('file',(name,filevalue)=>{ //file主要是获取文件数据信息。
    //     console.log('文件信息:',name,filevalue);
    // });

    // res.send("图片")
});

module.exports = router;








// app.post('/uploadimg', function (req, res) {
//             var form = new multiparty.Form();
//             form.uploadDir = 'public/upload/images'; //上传图片保存的地址(目录必须存在) 
//             form.parse(req, function(err, fields, files) {// 1、fields:获取表单的数据 2、files：图片上传成功返回的信息 
//                 myResult.result[0].code = "200"; 
//                 myResult.result[0].message="success"; 
//                 myResult.result[0].imgUrl='http://127.0.0.1:8888/'+files.image[0].path 
//                 res.send(myResult); 
//                 var url='http://127.0.0.1:8888/'+files.image[0].path; 
//                 /***********************************************数据库连接**********************************************************/ 
//                 let connection = mysql.createConnection(settings.db); 
//                 connection.connect(); let addSql = 'INSERT INTO userImage(userId,imgUrl) VALUES(0,?)'; //增 
//                 connection.query(addSql,url,function (err, result) { if (err) { console.log('[INSERT ERROR] - ', err.message); return; } console.log('INSERT ID:', result); }); connection.end();//关闭数据库连接池  }); }) app.listen(8888, () => console.log('Example app listening on port 8888!'));