function bmMatch(text, pattern) {
    let last = buildLast(pattern);
    let n = text.length;
    let m = pattern.length;
    let i = m - 1;
  
    if (i > n - 1) {
        return -1; // no match if pattern is longer than text
    }
    let j = m - 1;
  
    do {
        if (pattern.charAt(j) === text.charAt(i)) {
            if (j === 0) {
                return i; // match
            } else { // looking glass technique
                i--;
                j--;
            }
        } else { // character jump technique
            let lo = last[text.charCodeAt(i)];
            i = i + m - Math.min(j, 1 + lo);
            j = m - 1;
        }
    } while (i <= n - 1);
  
    return -1; // no match
  }
  
function buildLast(pattern) {
    let last = new Array(128).fill(-1);
  
    for (let i = 0; i < pattern.length; i++) {
      last[pattern.charCodeAt(i)] = i;
    }
  
    return last;
}

function kmpMatch(text, pattern) {
    let n = text.length;
    let m = pattern.length;
    let b = computeBorder(pattern);
    let i = 0;
    let j = 0;
  
    while (i < n) {
        if (pattern.charAt(j) === text.charAt(i)) {
            if (j === m - 1) {
                return i - m + 1; // match
            }
                i++;
                j++;
        } else if (j > 0) {
            j = b[j - 1];
        } else {
            i++;
        }
    }
    return -1; // no match
  }
  
function computeBorder(pattern) {
    let m = pattern.length;
    let b = new Array(m);
    b[0] = 0;
    let j = 0;
    let i = 1;
  
    while (i < m) {
        if (pattern.charAt(i) === pattern.charAt(j)) {
            b[i] = j + 1;
            i++;
            j++;
        } else if (j > 0) {
            j = b[j - 1];
        } else {
            b[i] = 0;
            i++;
        }
    }
    return b;
  }