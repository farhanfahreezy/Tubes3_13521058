import mysql from 'mysql';
import levenshteinDistance from './stringMatching.js';

const connection = mysql.createConnection({
  host: 'https//localhost:3306',
  user: 'akinator',
  password: 'akinator123',
  database: 'akinator'
});

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
            console.log(`Record added: question=${question}, answer=${answer}`);
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
            console.log(`Record not found: ID=${ID}`);
        } else {
            console.log(`Record deleted: ID=${ID}`);
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
            console.log(`Record not found: ID=${ID}`);
        } else {
            console.log(`Record updated: ID=${ID}, question=${question}, answer=${answer}`);
        }
    });
}

// Function to add a question to the database
function addQuestion(input) {
    // Parse the user input
    const regex = /^Tambahkan pertanyaan (.+) dengan jawaban (.+)$/i;
    const match = input.match(regex);
    if (!match) {
        console.log('Format input tIDak valID');
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
                console.log(`pertanyaan ${question} sudah ada`)
            } else {
                addRecord(question, answer);
                console.log(`pertanyaan ${question} telah ditambahkan`)
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
        console.log('Format input tIDak valID');
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
                console.log(`pertanyaan ${question} telah dihapus`)
            } else {
                console.log(`TIDak ada pertanyaan ${question} pada database`);
            }
        }
    });
}

// Getter for answer
function getAnswer(question) {
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
                console.log(`pertanyaan ${question} ditemukan dan jawaban telah diambil`)
            } else {
                console.log(`pertanyaan ${question} tidak ditemukan`)
            }
        }
    });
    
    return answer;
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
            console.log(`History added: number=${number}, who=${who}, dialog=${dialog}`);
        }
    });
}

// Function to add array of history (string) to the database with number parameter
function addHistoryArray(number, who, dialogArray) {
    for (const dialog of dialogArray) {
        addHistory(number, who, dialog);
    }
}

// Function to get the last number of history
// 0 until 9
function getLastHistoryNumber() {
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
            return number;
        }
    });
}

// Function to delete all history number from the database
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

// Getter for all dialog from a number, sort by lowest timestamp
// Return an array of dialog (string)
function getDialogs(number) {
    const sqlSelect = `SELECT * FROM history WHERE number = ? ORDER BY timestamp ASC`;
    connection.query(sqlSelect, [number], (error, results) => {
        if (error) {
            console.error(error);
        } else {
            let found = false;
            let dialogs = [];
            for (const row of results) {
                found = true;
                dialogs.push(row.dialog);
            }
            if (found) {
                console.log(`History number ${number} ditemukan dan dialog telah diambil`)
            } else {
                console.log(`History number ${number} tidak ditemukan`)
            }
        }
    });
    
    return dialogs;
}