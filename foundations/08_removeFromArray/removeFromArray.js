const removeFromArray = function(arr, ...remove) {
    const newArr = [];
    arr.forEach((item) => {
        if (!remove.includes(item)) {
            newArr.push(item);
        }
    })
    console.log(newArr);
};

removeFromArray([1, 2, 3, 4, 5, 6, 7], 3, 4, 6)

// Do not edit below this line
module.exports = removeFromArray;
