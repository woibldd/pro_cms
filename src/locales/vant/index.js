// 知识点1： 可用于模块的批量导入，类同于import引入同一文件夹下多个文件。
// require.context(directory, useSubdirectories = false, regExp = /^.//);
// 参数： 1. 读取文件的路径 2. 是否遍历文件的子目录 3. 匹配文件的正则表达式
// 返回是一个函数，是该文件夹下的匹配文件的执行环境
// 该函数有三个属性
// 1. resolve {Function} -接受一个参数request,request为test文件夹下面匹配文件的相对路径,返回这个匹配文件相对于整个工程的相对路径
// 2. keys {Function} -返回匹配成功模块的名字组成的数组
const modulesFiles = require.context("vant/es/locale/lang/", false, /(\.js)?$/)
// console.log(modulesFiles.keys())

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})
// for (const key of context.keys()) {
//     const keyArr = key.split('/')
//     keyArr.shift() // 移除.
//     map[keyArr.join('.').replace(/\.js$/g, '')] = context(key)
//   }

const filter_key  = Object.keys(modules).reduce((r,key)=>{
    var nk  = (key || '').slice(0,2).toLowerCase()
    // console.log( modules[key])
    r[nk] =nk=='zh' ?modules["zh-CN"] :modules[key]
   return r
},{})

export default filter_key

