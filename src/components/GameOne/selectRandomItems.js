export function selectRandomItems(count, array) {
    // Make a copy of the array
    var tmp = array.slice(array);
    var ret = [];
    
    for (var i = 0; i < count; i++) {
      var index = Math.floor(Math.random() * tmp.length);
      var removed = tmp.splice(index, 1);
      // Since we are only removing one element
      ret.push(removed[0]);
    }
    return ret;  
  }