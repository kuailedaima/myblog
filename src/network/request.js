// import axios from 'axios'
// export function request(config){
//         const instance  = axios.create({
//             baseURL: 'http://localhost:3000',
//             timeout: 5000
//         })
//         //使用拦截器 拦截请求
//         instance.interceptors.request.use(
//             config=>{
//                 console.log("拦截器(config)：")
//                 //动画
//                 console.log(config)
//                 return config;
//             },
//             err=>{
//                 console.log("拦截器(err)：");
//                 console.log(err)
//             }
//         );
//         //拦截响应
//         instance.interceptors.response.use(
//             res=>{
//                 //响应成功的拦截
//                 console.log("响应拦截器：");
//                 console.log(res)
//                 return res.data;
//             },err=>{
//                 //响应失败的拦截
//                 console.log("响应拦截器[失败]：");
//                 console.log(err)
//             }
//         );
//         //网络请求
//         return instance(config)
// }

//2----------------------------------------------------------------
// import axios from 'axios'
// export function request(config){
//     const instance  = axios.create({
//         baseURL: 'http://localhost:3000',
//         timeout: 5000
//     })
//     instance(config)
//         //成功，回调
//         .then(res=>{
//             console.log(res);
//         })
//         //失败，回调
//         .catch(res=>{
//             console.log(res);
//         })
// }

//3------------------------------------------------------------------
import axios from 'axios'

    //使用自定义配置创建axios实例
    const instance = axios.create({
        //urlbase:'http://123.207.32.32:8000'
        baseURL:'http://127.0.0.1:3000',
        timeout:5000,
        // headers: {'X-Custom-Header': 'foobar'}
   })

//axiso拦截器
//请求拦截
instance.interceptors.request.use(config=>{
    return config
}),err=>{

}
//响应拦截
instance.interceptors.response.use(res=>{
    return res.data
}),err=>{

}
//返回的是promise
export default instance

