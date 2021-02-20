// import axios from 'axios'

// export function http(config){
//     const instance = axios.create({
//         baseURL:'http://127.0.0.1:3000',
//         timeout:5000
//     })

//     instance.interceptors.request.use(config => {
//         // console.log(config);
//         //1.比如config中的一些信息不符合服务器的要求

//         //2.比如每次发送网络请求时，都希望在页面上显示一个请求图标
        
//         //3.某些网络请求（比如登录(token)),必须携带一些特殊信息
//         return config
//     },err => {
//         // console.log(err);
//     })

//     //2.2 响应拦截
//     instance.interceptors.response.use(res => {
//         // console.log(config);
//         return res.data
//     },err => {
//         console.log(err);
//     })


//     3.//发送真正的网络请求
//     return instance(config)
// }

// import axios from 'axios'
// export function request(config){
//     //使用自定义配置创建axios实例
//     const instance = axios.create({
//         //urlbase:'http://123.207.32.32:8000'
//         baseURL:'http://127.0.0.1:3000',
//         timeout:5000,
//         // headers: {'X-Custom-Header': 'foobar'}
//    })

// //axiso拦截器
// //请求拦截
// instance.interceptors.request.use(config=>{
//     return config
// }),err=>{

// }
// //响应拦截
// instance.interceptors.response.use(res=>{
//     return res.data
// }),err=>{

// }
// //返回的是promise
// return instance(config)

// }