import * as database from './database.js';
import * as stringMatching from './stringMatching.js';
import * as date from './date.js';
import * as calculator from './calculator.js';


function determineFeature(input) {
    const addQuestionRegex = /^Tambahkan pertanyaan (.+) dengan jawaban (.+)$/i;
    const deleteQuestionRegex = /^Hapus pertanyaan (.+)$/i;
    const calculateRegex = /^hitung(?:lah)?\s+(.+)$/i;
    const dateRegex = /^hari apa(?:kah)?\s(.+)\?$/i;
    
    if (addQuestionRegex.test(input)) {
        const [, question, answer] = input.match(addQuestionRegex);
        database.addQuestion(question, answer);
        console.log(`Pertanyaan "${question}" dengan jawaban "${answer}" berhasil ditambahkan`);
    } else if (deleteQuestionRegex.test(input)) {
        const [, question] = input.match(deleteQuestionRegex);
        database.deleteQuestion(question);
        console.log(`Pertanyaan "${question}" berhasil dihapus`);
    } else if (dateRegex.test(input)) {
        const [, dateQuestion] = input.match(dateRegex);
        const dateStr = dateQuestion.trim();
        const result = date.getDayOfDate(dateStr);
        if (result === 'invalid input' || result === 'invalid day' || result === 'invalid month' || result === 'invalid year' || result === 'invalid date') {
            console.log("Masukan tanggal tidak valid");
        } else {
            console.log(`Hari dari tanggal ${dateStr} adalah ${result}`);
        }
    }else if (calculateRegex.test(input)) {
        const [, expression] = input.match(calculateRegex);
        let result = calculator.calculate(expression);
        if (result === 'invalid expression' || result === 'invalid operator' || result === 'missing bracket') {
            console.log("Masukan ekspresi tidak valid");
        }else{
            console.log(`The result is: ${result.toString()}`);
        }
    }else{
        // TODO : Change depending on the toggle in the web app
        console.log(stringMatching.findMatchingString(input, dummy, 0));
        console.log(stringMatching.findMatchingString(input, dummy, 1));
        // return stringMatching.findMatchingString(input, database.getDatabase(), 0);
        // return stringMatching.findMatchingString(input, database.getDatabase(), 1);
    }
}
const dummy = [
    { question: 'What is the capital of Italy?', answer: 'The capital of Italy is Rome.' },
    { question: 'What is the capital of Spain?', answer: 'The capital of Spain is Madrid.' },
    { question: 'What is the capital of France?', answer: 'The capital of France is Paris.' },
    { question: 'What is the capital of Germany?', answer: 'The capital of Germany is Berlin.' },
]
let input = "hitunglah (5 - (3 * 7/2))";
// let input = "What is the capital of germ?";
// let input = "hari apakah 12/12/202?";
determineFeature(input);