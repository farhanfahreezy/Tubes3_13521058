import * as database from './database.js';
import * as stringMatching from './stringMatching.js';
import * as date from './date.js';
import * as calculator from './calculator.js';


function determineFeature(input) {
    const addQuestionRegex = /^Tambahkan pertanyaan (.+) dengan jawaban (.+)$/i;
    const deleteQuestionRegex = /^Hapus pertanyaan (.+)$/i;
    const calculateRegex = /^([hH]itung.*lah?|Berapa nilai( dari)?)\s(.+)$/i;
    const dateRegex = /^(hari apa|hari apakah(?:kah)?)\s(.+)\?$/i;

    if (addQuestionRegex.test(input)) {
        const [, question, answer] = input.match(addQuestionRegex);
        database.addQuestion(question, answer);
    } else if (deleteQuestionRegex.test(input)) {
        const [, question] = input.match(deleteQuestionRegex);
        database.deleteQuestion(question);
    } else if (dateRegex.test(input)) {
        const [, dateString] = input.match(dateRegex);
        return date.getDayOfDate(dateString);
    }else if (calculateRegex.test(input)) {
        const [, expression] = input.match(calculateRegex);
        let result = calculator.calculate(expression);
	    console.log(`The result is: ${result.toString()}`);
    }else{
        // TODO : Change depending on the toggle in the web app
        return stringMatching.findMatchingString(input, database.getDatabase(), 0);
        // return stringMatching.findMatchingString(input, database.getDatabase(), 1);
    }
}