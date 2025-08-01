const { createHash } = require('crypto');

function hash(input){
    return createHash('sha256').update(input).digest('hex');
}

let password ="Hello!";
const hash1 = hash(password);
// console.log(hash1);

password ="Hello!";
const hash2 = hash(password);
// console.log(hash2);

const match = hash1 === hash2;

console.log(match ? 'good password':"password doesn't match");

// Always same hash value for the same word
// This is just changing word into random words