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

function levenshteinDistance(str1, str2) {
    const distances = [];
    for (let i = 0; i <= str1.length; i++) {
        distances[i] = [i];
    }
    for (let j = 0; j <= str2.length; j++) {
        distances[0][j] = j;
    }

    for (let j = 1; j <= str2.length; j++) {
        for (let i = 1; i <= str1.length; i++) {
            if (str1[i-1] === str2[j-1]) {
                distances[i][j] = distances[i-1][j-1];
            } else {
                distances[i][j] = Math.min(
                distances[i-1][j] + 1,    // deletion
                distances[i][j-1] + 1,    // insertion
                distances[i-1][j-1] + 1   // substitution
                );
            }
        }
    }

    return distances[str1.length][str2.length];
}

// Test database and input

const input = 'What is the capital of belgium?';
const database = [
  { question: 'What is the capital of Italy?', answer: 'The capital of Italy is Rome.' },
  { question: 'What is the capital of Spain?', answer: 'The capital of Spain is Madrid.' },
  { question: 'What is the capital of France?', answer: 'The capital of France is Paris.' },
];

function findMatch(input, database) {
    const threshold = 0.9;
    const distances = [];
    
    // Calculate the Levenshtein Distance between the input and each question in the database
    database.forEach((entry) => {
      const distance = levenshteinDistance(input, entry.question);
      distances.push({ question: entry.question, answer: entry.answer, distance });
    });
    
    // Check if any questions have an exact match
    const exactMatch = distances.find((entry) => entry.distance === 0);
    if (exactMatch) {
      return exactMatch.answer;
    }
    
    // Check if any questions have a similarity score above or equal to 90%
    const similarQuestion = distances.find((entry) => entry.distance / entry.question.length < (1 - threshold));
    if (similarQuestion) {
      return similarQuestion.answer;
    }else{
        // Sort the questions by their similarity scores and return the top 3 closest matches
        const sortedDistances = distances.sort((a, b) => a.distance - b.distance);
        const options = sortedDistances.slice(0, 3).map((entry) => entry.question);
        return `Sorry, I couldn't find an exact match. Did you mean one of these instead?\n${options.join('\n')}`;
    }
}

const answer = findMatch(input, database);
console.log(answer); // Output: "The capital of France is Paris."
