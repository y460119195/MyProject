var fs = require('fs')

function readFilePromise(...args){
  return new Promise((resolve,reject)=>{
    fs.readFile(...args,(err,data)=>{
      if(err){
        reject(err)
      }else{
        resolve(data)
      }
    })
  })
}

function writeFilePromise(...args){
  return new Promise((resolve,reject)=>{
    fs.writeFile(...args,(err,data)=>{
      if(err){
        reject(err)
      }else{
        resolve(data)
      }
    })
  })
}

readFilePromise('server.js').then(data=>{}).catch(err=>{})

//
function promisify(callBackBasedFunction){
  return function(...args){
    return new Promise((resolve,reject)=>{
      callBackBasedFunction(...args,(err,data)=>{
        if(err){
          reject(err)
        }else{
          resolve(data)
        }
      })
    })
  }
}

function callbackify(promiseBased){
  return function(...args){
    var cb = args.pop()
    promiseBased(...args).then(val=>{
      cb(null,val)
    },reason=>{
      cb(reason)
    })
  }
}