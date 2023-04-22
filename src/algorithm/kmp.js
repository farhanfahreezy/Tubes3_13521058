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