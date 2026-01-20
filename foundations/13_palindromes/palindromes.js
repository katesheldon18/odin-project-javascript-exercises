const input = 'A car, a man, a maraca.'

const palindromes = function (input) {
    const plainString = input.toLowerCase().split('').filter((item) => (item !== ',' && item !== '.' && item !== ' ')).join('');
    let reversedLetters = [...plainString].reverse().join('');
    return plainString === reversedLetters;
};

console.log(palindromes(input));
console.log(palindromes('kate test'));

// Do not edit below this line
module.exports = palindromes;
