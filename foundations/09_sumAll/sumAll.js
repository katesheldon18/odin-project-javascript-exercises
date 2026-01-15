const sumAll = function(min, max) {
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum = sum + i;
        console.log(sum);
    }
    console.log('sum ' + sum);
};

sumAll(1, 10);

// Do not edit below this line
module.exports = sumAll;
