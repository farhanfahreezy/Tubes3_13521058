export {
    getDayOfDate
};

function getDayOfDate(dateStr) {
    // Array of month names
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

    // Accept any combination of /, -, or spaces as separators
    const dateArr = dateStr.split(/[\/\s-]+|^[a-zA-Z]{3}/);
    if (dateArr.length !== 3) {
        return `Invalid input: ${dateStr}. Please enter a valid date in the DD/MM/YYYY format.`;
    }

    // Check if the day, month, and year is valid
    const day = parseInt(dateArr[0]);
    if (isNaN(day) || day < 1) {
        return `Invalid day: ${dateArr[0]}. Please enter a valid day.`;
    }

    let month = parseInt(dateArr[1]);
    if (isNaN(month)) {
        month = monthNames.findIndex(name => name.toLowerCase() === dateArr[1].toLowerCase()) + 1;
        if (month === 0) {
            return `Invalid month: ${dateArr[1]}. Please enter a valid month.`;
        }
    }

    if (month < 1 || month > 12) {
        return `Invalid month: ${month}. Please enter a valid month.`;
    }

    const year = parseInt(dateArr[2]);
    if (isNaN(year) || year < 1000 || year > 9999) {
        return `Invalid year: ${dateArr[2]}. Please enter a valid year.`;
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
        return `Invalid day: ${dateArr[0]}. ${month}/${year} has ${maxDay} days.`;
    }
    // Determine the day of a given date
    const date = new Date(year, month - 1, day);
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = daysOfWeek[date.getDay()];

    return `${dayOfWeek}.`;
}

