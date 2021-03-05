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

        if(err){
           ;
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
             console.log(files[inputFile][0].originalFilename);
             let uploadPath = files[inputFile][0].path;

             //从路径名中分离出文件名
             let indexname = uploadPath.lastIndexOf('blogillstration');
             let indexadd = 16
             var imgname=uploadPath.substring(indexname+indexadd,uploadPath.length);
             console.log('图片名字'+imgname);
             let dstPath = 'D:/程序代码/学习测试/测试/vue项目/blog/server'+'/file/image/blogillstration/' + files[inputFile][0].originalFilename;
            //  let dstPath = ' '+'/file/image/blogillstration/' + files[inputFile][0].originalFilename;
             console.log(uploadPath);
             console.log(dstPath);
             //对图片重命名
            //  fs.rename(uploadPath, dstPath, function(err){
            //    if(err){
            //      console.log('命名失败！');
            //      console.log(err);
            //    } else {
            //      console.log('成功！');
            //    }
            //  })
            //  imgurl[inputFile]=files[inputFile][0].path
             imgurl[inputFile]="http://localhost:3000/image/blogillstration/"+imgname;
           }
           res.send(imgurl)
            
          }
    })
    
});

module.exports = router;