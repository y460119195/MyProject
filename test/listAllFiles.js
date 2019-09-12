var fs = require('fs')
var fsp = fs.promises
var path = process.cwd() + '/miao'
// console.log(process.execPath)
// console.log(__dirname)
 console.log(process.cwd())


/**
 * 接收一个文件夹路径，返回这个文件夹里面的所有文件名
 * 需要递归的得到所有的文件名 并放在一个一维数组里返回
 * 需要写三个版本：
 * 同步版
 * 回调版
 * Promise版本
 */
function listAllFilesSync(dirPath, list = []) {
  var files = fs.readdirSync(dirPath,{withFileTypes:true})
  files.forEach(it => {
    var nextPath = dirPath + '/' + it.name
    if (!it.isFile()) {
      listAllFilesSync(nextPath, list)
    } else {
      list.push(it.name)
    }
  })
  return list
}
var list = []

function listAllFilesCallback(dirPath, callback) {
  fs.readdir(dirPath, 'utf-8', (err, files) => {
    if (err)
      console.log(err)
    else {
      callback(dirPath, files)
    }
  })
}

var FilesCallBack = function (dirPath, files) {
  files.forEach(it => {
    var nextPath = dirPath + '/' + it
    fs.lstat(nextPath, (err, stats) => {
      if (err)
        console.log(err)
      else {
        if (stats.isDirectory()) {
          listAllFilesCallback(nextPath, (err,files)=>{

          })
        } else {
          list.push(it)
        }
      }
    })
  })
  
}
listAllFilesCallback(path, FilesCallBack)

function listAllFilesPromise(dirPath) {
  var result = []
  fsp.stat
}


//var files = listAllFilesSync(path)
//console.log(files)
//  listAllFilesCallback(path, (err, files) => {

//  })

// listAllFilesPromise(path).then(files => {

// }, err => {

// })