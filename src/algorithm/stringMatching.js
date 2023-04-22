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
  
  function KMPSearch(pat, txt) {
    let lps = computeLPSArray(pat);
    let i = 0; 
    let j = 0; 
    
    while (i < txt.length) {
      if (pat[j] == txt[i]) {
        i++;
        j++;
      }
      if (j == pat.length) {
        return i - j;
      } else if (i < txt.length && pat[j] != txt[i]) {
        if (j != 0)
          j = lps[j-1];  
        else
          i = i+1;
      }
    }
    return -1;
  }
  
  function computeLPSArray(pat) {
    let lps = [];
    let len = 0; 
    
    lps[0] = 0; 
    
    let i = 1;
    while (i < pat.length) {
      if (pat[i] == pat[len]) {
        len++;
        lps[i] = len;
        i++;
      } else {
        if (len != 0) 
          len = lps[len-1];  
        else
          lps[i] = 0;
          i++;
      }
    }
    return lps;
  }