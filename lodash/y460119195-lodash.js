class lodash {
  constructor(){
  }
  compact(ary) {
    return ary.filter(it => it)
  }
  chunk(ary,size = 1) {
    var result = []
    for(var i in ary){
      var subscript = Math.floor((i)/size)
      if(!result[subscript])
      result[subscript] = []
      result[subscript].push(ary[i])
    }
    return result
  }
  concat(ary,...other){
    for(var i in other){
      if(Array.isArray(other[i])){
        for(var j in other[i])
          ary.push(other[i][j])
      }else
        ary.push(other[i])
    }
    return ary
  }
  difference(array,...values){
    var map = {}
    var result = []
    for(var i in values){
      if(Array.isArray(values[i])){
        for(var j in values[i])
          map[values[i][j]] = 1
      }
    }
    array.forEach(function(element) {
      if(!(element in map))
      result.push(element)
    })
    return result
  }
  differenceBy(){
    
  }
  differenceWith(){
    
  }
  drop(ary,n=1){
    for(var i = 0; i<n;i++){
      ary.shift()
    }
    return ary
  }
  dropRight(ary,n = 1){
    for(var i = 0; i<n;i++){
      ary.pop()
    }
    return ary
  }
  dropRightWhile(ary,n = 1){
    
  }
  dropWhile(ary,n = 1){
    
  }
  fill(array, value, start = 0, end=array.length){
    for(var i = start ;i < end;i++){
      array[i] = value
    }
    return array
  }
  findIndex(array,pre,fromIndex = 0){
    var length = array.length
    if(Array.isArray(pre)){
      for(let i = fromIndex;i< length;i++){
        if(array[i][pre[0]] == pre[1])
          return i
      }
    }else if(typeof(pre) === 'object'){
      for(let i = fromIndex;i< length;i++){
        var flag = true
        for(let j in pre){
          if(array[i][j] == undefined){
            flag = false
            break
          }
          if(array[i][j] != pre[j]){
            flag = false
            break
          }
        }
        if(flag)return i
      }
    }else if(typeof(pre) === 'function'){
      for(let i = fromIndex;i< length;i++){
        if(pre(array[i]))
          return i
      }
    }else if(typeof(pre) === 'string'){
      for(let i = fromIndex;i< length;i++){
        if(array[i][pre])
          return i
      }
    }
    return -1
  }
  findLastIndex(array,pre,fromIndex = array.length-1){

    if(Array.isArray(pre)){
      for(let i = fromIndex;i>=0;i--){
        if(array[i][pre[0]] == pre[1])
          return i
      }
    }else if(typeof(pre) === 'object'){
      for(let i = fromIndex;i>=0;i--){
        var flag = true
        for(let j in pre){
          if(array[i][j] == undefined){
            flag = false
            break
          }
          if(array[i][j] != pre[j]){
            flag = false
            break
          }
        }
        if(flag)
        return i
      }
    }else if(typeof(pre) === 'function'){
      for(let i = fromIndex;i>=0;i--){
        if(pre(array[i]))
          return i
      }
    }else if(typeof(pre) === 'string'){
      for(let i = fromIndex;i>=0;i--){
        if(array[i][pre])
          return i
      }
    }
    return -1
  }
  flatten(array){
    var newArray = []
    for(var it of array){
      if(Array.isArray(it)){
        for(var j of it){
          newArray.push(j)
        }
      }else{
        newArray.push(it)
      }
    }
    return newArray
  }
  flattenDeep(array){
    return array.toString().split(',').map(it=>Number(it))
  }
  flattenDepth(array,depth = 1){
    var newArray = array
    while(depth){
      newArray = this.flatten(newArray)
      depth--
    }
    return newArray
  }
  fromPairs(pairs){
    var result = {}
    pairs.forEach((it, i)=>{
      result[it[0]] = pairs[i][1]
    })
    return result
  }
  head(array){
    return array[0]
  }
  indexOf(array,value,fromIndex = 0){
    var length = array.length
    for(var i = fromIndex;i<length ;i++){
      if(array[i] === value )
      return i
    }
  }
  initial(array){
    return array.slice(0,-1)
  }
  intersection(...ary){
    
  }

}

var y460119195 = new lodash()