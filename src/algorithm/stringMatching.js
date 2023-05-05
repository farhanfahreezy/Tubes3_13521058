export { levenshteinDistance, findMatchingString };

// ---------------------- Boyer-Moore Algorithm ----------------------
function bmMatch(text, pattern) {
  let last = buildLast(pattern);
  let n = text.length;
  let m = pattern.length;
  let i = m - 1;

  if (i > n - 1) {
    return -1;
  }
  let j = m - 1;

  do {
    if (pattern.charAt(j) === text.charAt(i)) {
      if (j === 0) {
        return i;
      } else {
        i--;
        j--;
      }
    } else {
      let lo = last[text.charCodeAt(i)];
      i = i + m - Math.min(j, 1 + lo);
      j = m - 1;
    }
  } while (i <= n - 1);

  return -1;
}

function buildLast(pattern) {
  let last = new Array(128).fill(-1);

  for (let i = 0; i < pattern.length; i++) {
    last[pattern.charCodeAt(i)] = i;
  }

  return last;
}

// ---------------------- KMP Algorithm ----------------------
function kmpMatch(text, pattern) {
  let n = text.length;
  let m = pattern.length;
  let b = computeBorder(pattern);
  let i = 0;
  let j = 0;

  while (i < n) {
    if (pattern.charAt(j) === text.charAt(i)) {
      if (j === m - 1) {
        return i - m + 1;
      }
      i++;
      j++;
    } else if (j > 0) {
      j = b[j - 1];
    } else {
      i++;
    }
  }
  return -1;
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

// ---------------------- Levenshtein Distance ----------------------
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
      if (str1[i - 1] === str2[j - 1]) {
        distances[i][j] = distances[i - 1][j - 1];
      } else {
        distances[i][j] = Math.min(
          distances[i - 1][j] + 1, // deletion
          distances[i][j - 1] + 1, // insertion
          distances[i - 1][j - 1] + 1 // substitution
        );
      }
    }
  }

  return distances[str1.length][str2.length];
}

// ---------------------- String Matching ----------------------
function findMatchingString(input, database, selected) {
  const threshold = 0.9;
  const distances = [];

  const inputLowerCase = input.toLowerCase();

  // TODO : Connect web app toggle to one of the following algorithms
  // Find matching string based on user selection
  if (selected === 0) {
    // Check for exact match using Boyer-Moore Algorithm
    const exactMatch = database.find(
      (entry) => bmMatch(inputLowerCase, entry.question.toLowerCase()) !== -1
    );
    if (exactMatch) {
      return exactMatch.answer;
    }
  } else {
    // Check for exact match using KMP Algorithm
    const exactMatch = database.find(
      (entry) => kmpMatch(inputLowerCase, entry.question.toLowerCase()) !== -1
    );
    if (exactMatch) {
      return exactMatch.answer;
    }
  }

  // Calculate the Levenshtein Distance between the input and each question in the database
  database.forEach((entry) => {
    const questionLowerCase = entry.question.toLowerCase();
    const distance = levenshteinDistance(inputLowerCase, questionLowerCase);
    distances.push({
      question: entry.question,
      answer: entry.answer,
      distance,
    });
  });

  // Check if any questions have a similarity score above or equal to 90%
  const similarQuestion = distances.find(
    (entry) => entry.distance / entry.question.length < 1 - threshold
  );
  if (similarQuestion) {
    return similarQuestion.answer;
  } else {
    // Sort the questions by their similarity scores and return the top 3 closest matches
    const sortedDistances = distances.sort((a, b) => a.distance - b.distance);
    const options = sortedDistances
      .slice(0, 3)
      .map((entry, index) => `${index + 1}. ${entry.question}`);
    const message = `Sorry, I couldn't find an exact match. Did you mean one of these instead?\n${options.join(
      "\n"
    )}`;

    // const response = prompt('Choose between the options above : ');
    // const choice = parseInt(response);

    // if (choice >= 1 && choice <= 3) {
    //     return sortedDistances[choice-1].answer;
    // } else {
    //     return 'Invalid choice';
    // }
    return message;
  }
}
