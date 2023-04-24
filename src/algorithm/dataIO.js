import mysql from 'mysql';
import levenshteinDistance from './stringMatching.js';

const connection = mysql.createConnection({
  host: 'https//localhost:3306',
  user: 'TheLegend27',
  password: '123456789',
  database: 'questions'
});

// Function to add a record to the database
function addRecord(question, answer) {
    const sql = `INSERT INTO questions (question, answer) VALUES (?, ?)`;
    connection.query(sql, [question, answer], (error, results) => {
        if (error) {
            console.error(error);
        } else {
            console.log(`Record added: question=${question}, answer=${answer}`);
        }
    });
}

// Function to delete a record from the database
function deleteRecord(id) {
    const sql = `DELETE FROM questions WHERE id = ?`;
    connection.query(sql, [id], (error, results) => {
        if (error) {
            console.error(error);
        } else if (results.affectedRows === 0) {
            console.log(`Record not found: id=${id}`);
        } else {
            console.log(`Record deleted: id=${id}`);
        }
    });
}

// Function to update a record in the database
function updateRecord(id, question, answer) {
    const sql = `UPDATE questions SET question = ?, answer = ? WHERE id = ?`;
    connection.query(sql, [question, answer, id], (error, results) => {
        if (error) {
            console.error(error);
        } else if (results.affectedRows === 0) {
            console.log(`Record not found: id=${id}`);
        } else {
            console.log(`Record updated: id=${id}, question=${question}, answer=${answer}`);
        }
    });
}

// Function to add a question to the database
function addQuestion(input) {
    // Parse the user input
    const regex = /^Tambahkan pertanyaan (.+) dengan jawaban (.+)$/i;
    const match = input.match(regex);
    if (!match) {
        console.log('Format input tidak valid');
        return;
    }
    const question = match[1];
    const answer = match[2];
  
    // Check if the question already exists in the database
    const sqlSelect = `SELECT * FROM questions`;
    connection.query(sqlSelect, (error, results) => {
        if (error) {
            console.error(error);
        } else {
            let found = false;
            let id;
            let distance = Infinity;
            for (const row of results) {
                const rowQuestion = row.question;
                const rowDistance = levenshteinDistance(question, rowQuestion);
                if (rowDistance <= 3 && rowDistance < distance) {
                    found = true;
                    id = row.id;
                    distance = rowDistance;
                }
            }
            if (found) {
                updateRecord(id, question, answer);
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
        console.log('Format input tidak valid');
        return;
    }
    const question = match[1];
  
    // Check if the question exists in the database
    const sqlSelect = `SELECT * FROM questions`;
    connection.query(sqlSelect, (error, results) => {
        if (error) {
            console.error(error);
        } else {
            let found = false;
            let id;
            let distance = Infinity;
            for (const row of results) {
                const rowQuestion = row.question;
                const rowDistance = levenshteinDistance(question, rowQuestion);
                if (rowDistance <= 3 && rowDistance < distance) {
                    found = true;
                    id = row.id;
                    distance = rowDistance;
                }
            }
            if (found) {
                deleteRecord(id);
                console.log(`pertanyaan ${question} telah dihapus`)
            } else {
                console.log(`Tidak ada pertanyaan ${question} pada database`);
            }
        }
    });
}