// const number = [1, 2, 3, 4, 5];
// const dasSeparated = number.join("-");
// console.log(dasSeparated); 

// Your task is to write a script that accomplishes the following:
// Loop through the characters of a given CSV string.
// Store each “cell” of data in a variable.
// When you encounter a comma, move to the next cell.
// When you encounter the “\r\n” sequence, move to the next “row.”
// Log each row of data.
// You do not need to format the data, the following works well.
// console.log(cell1, cell2, cell3, cell4);

// const cells = [Index, Mass, (kg),Spring 1, (m),Spring 2 (m)
//     ,0.00,0.050,0.050\,0.49,0.066,0.066\n3,0.98,0.087,0.080
//     ,1.47,0.116,0.108,1.96,0.142,0.138,2.45,0.166,0.158
//     ,2.94,0.193,0.174,3.43,0.204,0.192,3.92,0.226,0.205
//     ,4.41,0.238,0.232]

// const SeparateTheTwo = cells.join(",");
// console.log(SeparateTheTwo);

// const cells = [{
//     cell1, 
    
//     cell2, 
//     cell3, 
//     cell4
// }];

// const csvString = `Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232`;

// let cell = '   ';
// let row = [];
// const rows = [];

// for (let i = 0; i < csvString.length; i++) {
//     if (csvString[i] === ',') {
//         row.push(cell);
//         cell = '      ';
//     } 
//         else if (csvString[i] === '\n' || (csvString[i] === '\r' && csvString[i+1] === '\n')) {
//             row.push(cell);
//             rows.push(row);
//             cell = '      ';
//             row = [];
//          if (csvString[i] === '\r') {
//             i++; // Skip the '\n' character after '\r'
//         }
//     } 
//     else {
//         cell += csvString[i];
//     }
// }

// // To log the last cell of the last row if the string doesn't end with a newline character
// if (cell) {
//     row.push(cell);
//     rows.push(row);
// }

// // Log each row of data
// for (const r of rows) {
//     console.log(r[0], r[1], r[2], r[3]);
// }

// const csvString = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

// let cell = '';
// let row =[];
// const rows =[];

// for (let i = 0; i < csvString.length; i++) {
//     if (csvString[i] === ',') {
//         row.push(cell);
//         cell = ' ';
//     } else if (csvString[i] === '\n' || (csvString[i] === '\r' && csvString[i + 1] === '\n')) {
//         row.push(cell);
//         rows.push(row);
//         cell = ' ';
//         row = [];
//         if (csvString[i] === '\r') {
//             i++; // Skip the '\n' character after '\r'
//         }
//     } else {
//         cell += csvString[i];
//     }
// }

// // To log the last cell of the last row if the string doesn't end with a newline character
// if (cell) {
//     row.push(cell);
//     rows.push(row);
// }

// // Log each row of data
// for (const r of rows) {
//     console.log(r[0], r[1], r[2], r[3]);
// }
// const csvString = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26';

// let rows = csvString.split('\n'); // Split the string by \n to get the rows
// rows = rows.map(row => row.split(',')); // Split each row by comma to get the columns

// // Log each row of data
// rows.forEach(row => {
//     console.log(row.join(',')); // Join the columns back into a string with spaces
// });


const csvString = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26';

// Step 1: Split the CSV string into rows
let rows = csvString.split('\n'); // Split into rows

// Step 2: Split each row into columns
let twoDimensionalArray = rows.map(row => row.split(',')); // Create a 2D array

// let objectKey =  csvString(row => row.split(" "))

// Part 3: Transforming Data
let headers = rows[0].split(',').map(header => header.toLowerCase());


let dataObjects = rows.slice(1).map(row => {
    let values = row.split(',');
    let obj = {};
    headers.forEach((header, index) => {
        obj[header] = values[index];
    });
    return obj;
});

// Step 4: Log the array of objects
dataObjects.pop();

dataObjects.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });
dataObjects.push(  { id: "7", name: "Bilbo", occupation: "None", age: "111" });
console.log(dataObjects);




// Step 1: The csvString is split into rows using the newline character (\n).
// Step 2: The first row (headers) is split into column names, and all headers are converted to lowercase using .map().
// Step 3: Each subsequent row is split into values, and these are mapped to the corresponding column headers to create objects.
// Step 4: The array of objects is logged to the console.


