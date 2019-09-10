var y460119195 = {
  compact: function(ary) {
    return ary.filter(it => it)
  },
  chunk: function(ary,size = 1) {
    var result = []
    for(var i in ary){
      var subscript = Math.floor((i)/size)
      if(!result[subscript])
      result[subscript] = []
      result[subscript].push(ary[i])
    }
    return result
  },
  concat:function(ary,...other){
    for(var i in other){
      if(Array.isArray(other[i])){
        for(var j in other[i])
          ary.push(other[i][j])
      }else
        ary.push(other[i])
    }
    return ary
  },
  difference:function(array,...values){
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
  },
  differenceBy:function(){
    
  },
  differenceWith:function(){
    
  },
  drop:function(ary,n = 1){
    for(var i = 0; i<n;i++){
      ary.shift()
    }
    return ary
  },
  dropRight:function(ary,n = 1){
    for(var i = 0; i<n;i++){
      ary.pop()
    }
    return ary
  },
  dropRightWhile:function(ary,n = 1){
    
  },
  dropWhile:function(ary,n = 1){
    
  },
  fill:function(array, value, start = 0, end=array.length){
    for(var i = start ;i < end;i++){
      array[i] = value
    }
    return array
  },
  findIndex:function(array,pre,fromIndex = 0){
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
          if(!array[i][j]){
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
  },
  findLastIndex:function(array,pre,fromIndex = array.length-1){

    if(Array.isArray(pre)){
      for(let i = fromIndex;i>=0;i--){
        if(array[i][pre[0]] == pre[1])
          return i
      }
    }else if(typeof(pre) === 'object'){
      for(let i = fromIndex;i< length;i++){
        var flag = true
        for(let j in pre){
          if(!array[i][j]){
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
  },
  flatten:function(array){
    var newArray = []
    for(var it of array){
      newArray.push(it)
    }
    return newArray
  },
  flattenDeep:function(){
    var newArray = []
    for(let it of array){
      if(Array.isArray(it))
        it = flattenDeep(it)
      newArray.push(it)
    }
    return newArray
  },
  flattenDepth:function(){

  },
  fromPairs:function(){

  },
  head:function(){

  },
  indexOf:function(){

  },
  initial:function(){

  },
  intersection:function(){

  },

}