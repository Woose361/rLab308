// Step 1: Split the CSV string into rows
const csvString = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26';
let rows = csvString.split('\n');

// Step 2: Split the first row (header) into column headings
let headers = rows[0].split(',').map(header => header.toLowerCase());

// Step 3: Process the remaining rows to create objects
let dataObjects = rows.slice(1).map(row => {
    let values = row.split(',');
    let obj = {};
    headers.forEach((header, index) => {
        obj[header] = values[index];
    });
    return obj;
});

// Step 4: Log the array of objects
console.log(dataObjects);