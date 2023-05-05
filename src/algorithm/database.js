import mysql from "mysql";
import { levenshteinDistance } from "./stringMatching.js";
export {
  connect,
  disconnect,
  addRecord,
  deleteRecord,
  updateRecord,
  addQuestion,
  deleteQuestion,
  getAnswer,
  getAllQuestionsAndAnswers,
  deleteAllQuestionsAndAnswers,
  addHistory,
  getLastHistoryNumber,
  deleteHistory,
  getDialogs,
  deleteAllHistory,
};

const connection = mysql.createConnection({
  host: "sql12.freesqldatabase.com",
  user: "sql12615682",
  password: "iZcTdrx8Ap",
  database: "sql12615682",
});

// Function to connect to the database
function connect() {
  connection.connect((err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Connected to the database.");
    }
  });
}

// Function to disconnect from the database
function disconnect() {
  connection.end((err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Connection closed.");
    }
  });
}

/*
    Fuctions for question_answer
*/

// Function to add a record to the database
function addRecord(question, answer) {
  const sql = `INSERT INTO question_answer (question, answer) VALUES (?, ?)`;
  connection.query(sql, [question, answer], (error, results) => {
    if (error) {
      console.error(error);
    } else {
      console.log(
        `Record berhasil ditambahkan: pertanyaan=${question}, jawaban=${answer}`
      );
    }
  });
}

// Function to delete a record from the database
function deleteRecord(ID) {
  const sql = `DELETE FROM question_answer WHERE ID = ?`;
  connection.query(sql, [ID], (error, results) => {
    if (error) {
      console.error(error);
    } else if (results.affectedRows === 0) {
      console.log(`Record tidak ditemukan: ID=${ID}`);
    } else {
      console.log(`Record berhasil dihapus: ID=${ID}`);
    }
  });
}

// Function to update a record in the database
function updateRecord(ID, question, answer) {
  const sql = `UPDATE question_answer SET question = ?, answer = ? WHERE ID = ?`;
  connection.query(sql, [question, answer, ID], (error, results) => {
    if (error) {
      console.error(error);
    } else if (results.affectedRows === 0) {
      console.log(`Record tidak ditemukan: ID=${ID}`);
    } else {
      console.log(
        `Record berhasil diperbarui: ID=${ID}, pertanyaan=${question}, jawaban=${answer}`
      );
    }
  });
}

// Function to add a question to the database
function addQuestion(input) {
  // Parse the user input
  const regex = /^Tambahkan pertanyaan (.+) dengan jawaban (.+)$/i;
  const match = input.match(regex);
  if (!match) {
    console.log("Format input tIDak valID");
    return;
  }
  const question = match[1];
  const answer = match[2];

  // Check if the question already exists in the database
  const sqlSelect = `SELECT * FROM question_answer`;
  connection.query(sqlSelect, (error, results) => {
    if (error) {
      console.error(error);
    } else {
      let found = false;
      let ID;
      let distance = Infinity;
      for (const row of results) {
        const rowQuestion = row.question;
        const rowDistance = levenshteinDistance(question, rowQuestion);
        if (rowDistance <= 3 && rowDistance < distance) {
          found = true;
          ID = row.ID;
          distance = rowDistance;
        }
      }
      if (found) {
        updateRecord(ID, question, answer);
        console.log(`pertanyaan ${question} sudah ada`);
      } else {
        addRecord(question, answer);
        console.log(`pertanyaan ${question} telah ditambahkan`);
      }
    }
  });
}

// Function to delete a question from the database
function deleteQuestion(input) {
  // Parse the user input
  const regex = /^Hapus pertanyaan (.+)$/i;
  const match = input.match(regex);
  if (!match) {
    console.log("Format input tIDak valID");
    return;
  }
  const question = match[1];

  // Check if the question exists in the database
  const sqlSelect = `SELECT * FROM question_answer`;
  connection.query(sqlSelect, (error, results) => {
    if (error) {
      console.error(error);
    } else {
      let found = false;
      let ID;
      let distance = Infinity;
      for (const row of results) {
        const rowQuestion = row.question;
        const rowDistance = levenshteinDistance(question, rowQuestion);
        if (rowDistance <= 3 && rowDistance < distance) {
          found = true;
          ID = row.ID;
          distance = rowDistance;
        }
      }
      if (found) {
        deleteRecord(ID);
        console.log(`pertanyaan ${question} telah dihapus`);
      } else {
        console.log(`TIDak ada pertanyaan ${question} pada database`);
      }
    }
  });
}

/*
    Getter for answer
    HOW TO USE:
    getAnswer('question text', (answer) => {
    if (answer) {
        console.log(`The answer is ${answer}`);
    } else {
        console.log('Answer not found');
    }
    });
*/
function getAnswer(question, callback) {
  // Check if the question exists in the database
  const sqlSelect = `SELECT * FROM question_answer`;
  connection.query(sqlSelect, (error, results) => {
    if (error) {
      console.error(error);
    } else {
      let found = false;
      let answer;
      let distance = Infinity;
      for (const row of results) {
        const rowQuestion = row.question;
        const rowDistance = levenshteinDistance(question, rowQuestion);
        if (rowDistance <= 3 && rowDistance < distance) {
          found = true;
          answer = row.answer;
          distance = rowDistance;
        }
      }
      if (found) {
        console.log(
          `pertanyaan ${question} ditemukan dan jawaban telah diambil`
        );
        callback(answer);
      } else {
        console.log(`pertanyaan ${question} tidak ditemukan`);
        callback(null);
      }
    }
  });
}

/* 
    Getter for all questions and answers
    Return format :
    const database = [
        { question: 'question1', answer: 'answer1' },
        { question: 'question2', answer: 'answer2' },
        { question: 'question3', answer: 'answer3' },
    ];

    HOW TO USE:
    getAllQuestionsAndAnswers()
    .then(database => {
        console.log(database);
    })
    .catch(error => {
        console.error(error);
    });
*/
function getAllQuestionsAndAnswers() {
  const sqlSelect = `SELECT * FROM question_answer`;
  return new Promise((resolve, reject) => {
    connection.query(sqlSelect, (error, results) => {
      if (error) {
        reject(error);
      } else {
        const database = results.map((row) => {
          return { question: row.question, answer: row.answer };
        });
        resolve(database);
      }
    });
  });
}

// Delete all questions and answers from the database
function deleteAllQuestionsAndAnswers() {
  const sql = `TRUNCATE question_answer`;
  connection.query(sql, (error, results) => {
    if (error) {
      console.error(error);
    } else {
      console.log("Semua pertanyaan dan jawaban telah dihapus");
    }
  });
}

/*
    Functions for history
*/

// Function to add a history to the database with number parameter
function addHistory(number, who, dialog) {
  const sql = `INSERT INTO history (number, who, dialog) VALUES (?, ?, ?)`;
  connection.query(sql, [number, who, dialog], (error, results) => {
    if (error) {
      console.error(error);
    } else {
      console.log(
        `History added: number=${number}, who=${who}, dialog=${dialog}`
      );
    }
  });
}

/*
    Function to get the last number of history
    0 until 9
    HOW TO USE:
    database.getLastHistoryNumber((Number) => {
        if (Number) {
            console.log(`The last history number is ${Number}`);
        } else {
            console.log('No history found');
        }
    });
*/
function getLastHistoryNumber(callback) {
  // Get the last number
  const sqlSelect = `SELECT * FROM history ORDER BY number DESC LIMIT 1`;
  connection.query(sqlSelect, (error, results) => {
    if (error) {
      console.error(error);
    } else {
      let number = 0;
      if (results.length > 0) {
        number = results[0].number;
      }
      callback(number);
    }
  });
}

// Function to delete all history number from the database and adjust the number
function deleteHistory(number) {
  // Delete history
  const sql = `DELETE FROM history WHERE number = ?`;
  connection.query(sql, [number], (error, results) => {
    if (error) {
      console.error(error);
    } else if (results.affectedRows === 0) {
      console.log(`History not found: number=${number}`);
    } else {
      console.log(`History deleted: number=${number}`);
    }
  });

  // Decrement number where number > this.number
  const sqlDecrement = `UPDATE history SET number = number - 1 WHERE number > ?`;
  connection.query(sqlDecrement, [number], (error, results) => {
    if (error) {
      console.error(error);
    } else {
      console.log(`History number adjudsted`);
    }
  });
}
/*
    Getter for all dialog from a number, sort by lowest timestamp
    Return an array of dialog (string)
    HOW TO USE:
    getDialogs(number, (dialogs) => {
        if (dialogs) {
            for (const dialog of dialogs) {
                console.log(dialog);
            }
        } else {
            console.log('No dialogs found');
        }
    });
*/
function getDialogs(number, callback) {
  const sqlSelect = `SELECT * FROM history WHERE number = ? ORDER BY timestamp, ID ASC`;
  connection.query(sqlSelect, [number], (error, results) => {
    if (error) {
      console.error(error);
    } else {
      let found = false;
      let dialogs = [];
      for (const row of results) {
        found = true;
        dialogs.push({
          ID: row.ID,
          number: row.number,
          who: row.who,
          dialog: row.dialog,
        });
      }
      if (found) {
        console.log(
          `History number ${number} ditemukan dan dialog telah diambil`
        );
        callback(dialogs);
      } else {
        console.log(`History number ${number} tidak ditemukan`);
        callback(null);
      }
    }
  });
}

// Function to delete all history from the database
function deleteAllHistory() {
  const sql = `TRUNCATE history`;
  connection.query(sql, (error, results) => {
    if (error) {
      console.error(error);
    } else {
      console.log("Semua history telah dihapus");
    }
  });
}
