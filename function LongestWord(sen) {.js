function LongestWord(sen) {
   
    let longestWord = sen.match(/[a-z0-9]+/gi).sort(function(a,b) {
          return b.length - a.length 
        })
    
      return longestWord[0]; 
    
    } 
    
       
    // keep this function call here 
    console.log(LongestWord(sen));