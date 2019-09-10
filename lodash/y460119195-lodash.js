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
  findIndex:function(array,pre){
    if(Array.isArray(pre)){
      for(var i in array){
        if(array[i][pre[0]] == pre[1])
          return i
      }
    }else if(typeof(pre) === 'object'){
      for(var i in array){
        for(var j in pre){
          if(!array[i][j])
            break;
          if(array[i][j] != pre[j])
            break
        }
          return i
      }
    }else if(typeof(pre) === 'function'){
      for(var i in array){
        if(pre(array[i]))
          return i
      }
    }else if(typeof(pre) === 'string'){
      for(var i in array){
        if(array[i][pre])
          return i
      }
    }
    return -1
  },
  findLastIndex:function(array, [predicate=_.identity], [fromIndex=0]){
    
  },
  flatten:function(array, [predicate=_.identity], [fromIndex=0]){
    
  },
}