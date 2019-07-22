var y460119195 = {
  compact: function(ary) {
    return ary.filter(it => it)
  },
  chunk: function(ary,size = 1) {
    var result = []
    for(var i in ary){
      var subscript = (Math.floor(i+1)/size)-1
      if(!result[subscript])
      result[subscript] = []
      result[subscript].push(ary[i])
    }
    return result
  },
}