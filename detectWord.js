function detectWord(str) {
    let word = ""
      for (i = 0; i < str.length; i++) {
          if (str[i] == str[i].toLowerCase()) {
              word += (str[i])
          }
      }
    return word
  }