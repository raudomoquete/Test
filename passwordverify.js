const readline = require("readline");
const rdln = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

var passwords = [];
var num = 0;

rdln.on('line', (line) => {
    if (typeof line === 'string' && line.length >= 6 && line.length <= 12 && /^[a-zA-Z\0-9\$ # @\s-]+$/i.test(line)){
        passwords.push(line.split(' '));
        num++;
    }       
    
    console.log(`Passwords correctos: ${passwords}`)
})