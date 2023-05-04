export {
	calculate
};

function calculate(query) {
    let components = query.replace(/\s/g, '').replace(/([\+\-\*\/\(\)])/g, ' $1 ').trim().split(/\s+/);
    let stack = [];
    let operators = [];
    let balance = 0; // Keep track of the balance of opening and closing brackets

    for (let i = 0; i < components.length; i++) {
        let component = components[i];
		if (!isNaN(component)) {
			stack.push(Number(component));
        } else if (component === '(') {
			operators.push('(');
			balance++; // Increment the balance for each opening bracket
        } else if (component === ')') {
			while (operators[operators.length-1] !== '(') {
				let op = operators.pop();
				let b = stack.pop();
				let a = stack.pop();
				stack.push(eval(`${a} ${op} ${b}`));
			}
			operators.pop(); // Remove the '(' from the operators stack
			balance--; // Decrement the balance for each closing bracket
        } else if (precedence(component) > 0) {
			while (operators.length > 0 && precedence(component) <= precedence(operators[operators.length-1])) {
				let op = operators.pop();
				let b = stack.pop();
				let a = stack.pop();
				stack.push(eval(`${a} ${op} ${b}`));
			}
        	operators.push(component);
        } else {
        	return 'invalid operator';
        }
    }

    while (operators.length > 0) {
		let op = operators.pop();
		let b = stack.pop();
		let a = stack.pop();
		stack.push(eval(`${a} ${op} ${b}`));
    }

    if (stack.length !== 1 || isNaN(stack[0])) {
      	return 'invalid expression';
    }

    if (balance !== 0) { // Check if the balance of brackets is not zero
      	return 'missing bracket';
    }

    return stack[0];
}

function precedence(op) {
	if (op === '+' || op === '-') {
		return 1;
	} else if (op === '*' || op === '/') {
		return 2;
	} else if (op === '^') {
		return 3;
	} else {
		return 0;
	}
}


// try {
// 	// TODO : replace query with user input
// 	let query = prompt('Enter an expression: ');
// 	let result = calculate(query);
// 	// TODO : Show to frontend
// 	console.log(`The result is: ${result.toString()}`);
// } catch (error) {
// 	// TODO : Show to frontend
//     console.error(error.message);
// }