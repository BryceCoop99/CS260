const arrays = [[1, 2, 3], [4, 5], [6]];


var array = arrays.reduce(function (elem1, elem2) {
    return elem1.concat(elem2);
});

console.log(array);

// var mergedArray = [].concat.apply([], arrays);

// console.log(mergedArray);