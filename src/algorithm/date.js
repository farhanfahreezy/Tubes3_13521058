import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a date (DD/MM/YYYY): ', (dateStr) => {
    const dateArr = dateStr.split('/');
    if (dateArr.length !== 3) {
        console.log(`Invalid input: ${dateStr}. Please enter a valid date in the DD/MM/YYYY format.`);
        rl.close();
        return;
    }

    const day = parseInt(dateArr[0]);
    if (isNaN(day) || day < 1) {
        console.log(`Invalid day: ${dateArr[0]}. Please enter a valid day.`);
        rl.close();
        return;
    }

    const month = parseInt(dateArr[1]);
    if (isNaN(month) || month < 1 || month > 12) {
        console.log(`Invalid month: ${dateArr[1]}. Please enter a valid month.`);
        rl.close();
        return;
    }

    const year = parseInt(dateArr[2]);
    if (isNaN(year) || year < 1000 || year > 9999) {
        console.log(`Invalid year: ${dateArr[2]}. Please enter a valid year.`);
        rl.close();
        return;
    }

    let maxDay = 31;
    if (month === 2) {
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        maxDay = 29;
        } else {
        maxDay = 28;
        }
    } else if (month % 2 === 0 && month < 8 || month % 2 === 1 && month > 7) {
        maxDay = 30;
    } else {
        maxDay = 31;
    }

    if (day > maxDay) {
        console.log(`Invalid day: ${dateArr[0]}. ${month}/${year} has ${maxDay} days.`);
        rl.close();
        return;
    }

    const date = new Date(year, month - 1, day);
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = daysOfWeek[date.getDay()];

    console.log(`The day of the week for ${dateStr} is ${dayOfWeek}.`);

    rl.close();
});