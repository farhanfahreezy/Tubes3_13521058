import createPromptSync from 'prompt-sync';
import { evaluate, isComplex, complex } from 'mathjs';

const prompt = createPromptSync({ autocomplete: false });

function calculate(query) {
  let components = query.replace(/\s/g, '').replace(/([\+\-\*\/\(\)])/g, ' $1 ').trim().split(/\s+/);
  let stack = [];
  let operators = [];
  
  for (let i = 0; i < components.length; i++) {
    let component = components[i];
    if (!isNaN(component)) {
      stack.push(complex(Number(component)));
    } else if (component === '(') {
      operators.push('(');
    } else if (component === ')') {
      while (operators[operators.length-1] !== '(') {
        let op = operators.pop();
        let b = stack.pop();
        let a = stack.pop();
        stack.push(evaluate(`${a} ${op} ${b}`));
      }
      operators.pop(); // Remove the '(' from the operators stack
    } else if (precedence(component) > 0) {
      while (operators.length > 0 && precedence(component) <= precedence(operators[operators.length-1])) {
        let op = operators.pop();
        let b = stack.pop();
        let a = stack.pop();
        stack.push(evaluate(`${a} ${op} ${b}`));
      }
      operators.push(component);
    } else {
      throw new Error(`Invalid operator: ${component}`);
    }
  }
  
  while (operators.length > 0) {
    let op = operators.pop();
    let b = stack.pop();
    let a = stack.pop();
    stack.push(evaluate(`${a} ${op} ${b}`));
  }
  
  if (stack.length !== 1 || !isComplex(stack[0])) {
    throw new Error('Invalid expression');
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

try {
  let query = prompt('Enter an expression: ');
  let result = calculate(query);
  console.log(`The result is: ${result.toString()}`);
} catch (error) {
  console.error(error.message);
}