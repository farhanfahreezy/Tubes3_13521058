// // A regex to match numbers
// const numRegex = /d+/; 

// // A regex to match names 
// const nameRegex = /[A-Z][a-z]+/;

// // A regex to match phone numbers
// const phoneRegex = /d{3}-d{3}-d{4}/;

// // A regex to match emails
// const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/;

// // Search for first number 
// let match = numRegex.exec('There are 10 dogs and 4 cats'); 
// console.log(match[0]); // 10

// // Find all names
// let matches = [];  
// let result;
// while ((result = nameRegex.exec('There are Amy, David and Sam')) != null) {
//   matches.push(result[0]);
// }
// console.log(matches); // [ 'Amy', 'David', 'Sam' ]

// // Validate phone number 
// let phone = '123-456-7890';
// let validPhone = phoneRegex.test(phone); 
// console.log(validPhone); // true

// // Validate email 
// let email = 'abc@xyz.com';  
// let validEmail = emailRegex.test(email);
// console.log(validEmail); // true

// // Replace 
// let text = 'There are 10 dogs, 4 cats and 3 birds';  
// let replaced = text.replace(numRegex, 'x'); 
// console.log(replaced); // There are x dogs, x cats and x birds

// // Split
// let split = text.split(/\s+/); 
// console.log(split); 
// // [ 'There', 'are', '10', 'dogs,', '4', 'cats', 'and', '3', 'birds' ]

// RegExp.exec = Pattern.search
// RegExp() = re.compile()
// String.match() = Pattern.match() 
// String.matchAll() = re.findall()

// const regex = /a.*z/;
// const testString1 = 'apple and pizza'; // should not match
// const testString2 = 'banana and orange'; // should not match
// const testString3 = 'awesome'; // should not match
// const testString4 = 'amazing zebra'; // should match

// console.log(regex.test(testString1)); // false
// console.log(regex.test(testString2)); // false
// console.log(regex.test(testString3)); // false
// console.log(regex.test(testString4)); // true