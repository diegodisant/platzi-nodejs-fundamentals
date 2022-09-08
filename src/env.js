let sourceName = process.env.SOURCE_NAME || 'no-source-name';
let apiUrl = process.env.API_URL || 'no-api-url';

console.log('sourceName:', sourceName);
console.log('apiUrl', apiUrl);

//run like SOURCE_NAME=data-infile-map API_URL='https://api.com/data' node env.js
