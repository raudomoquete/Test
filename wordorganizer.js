const readline = require("readline");
const rdln = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

var words = [];
var num = 0;

rdln.on('line', (line) => {
    words.push(line.split(' '));
    num ++;

    words.sort((a, b) => 
        a.toString().localeCompare(b)
    );

    console.log(`el orden es: ${words}`)
});