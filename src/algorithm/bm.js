function BMsearch(pat, txt) {
    let badCharShift = []; 
    let goodSuffixShift = []; 
    let patLen = pat.length;
    let txtLen = txt.length;
    
    for (let i = 0; i < 256; i++) 
      badCharShift[i] = patLen; 
    
    for (let i = 0; i < patLen-1; i++) 
      goodSuffixShift[i] = patLen; 
    
    for (let i = 0; i < patLen-1; i++) { 
      let j = i; 
      while (j >= 0 && pat[j] == pat[patLen-1-i+j]) 
        j--; 
      goodSuffixShift[patLen-1-i] = i - j; 
    }
    
    let i = patLen - 1; 
    while (i < txtLen) {
      let j = patLen - 1; 
      while (j >= 0 && pat[j] == txt[i]) { 
        j--;
        i--; 
      }
      if (j < 0)  
        return i + 1; 
        
      let shift = max(goodSuffixShift[j], badCharShift[txt[i]] - patLen + 1); 
      i += shift; 
    }
    return -1; 
  }