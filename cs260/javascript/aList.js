function arrayToList(array) {
    let list = null;
    for (let i=array.length-1; i >= 0; i--) {
        list = {value: array[i], rest: list};
    }
    return list;
}

function listToArray(list) {
    let newList = [];
    for (let node = list; node; node = node.rest) {
        newList.push(node.value);
    }
    return newList;
}

function prepend(element, list) {
    return {value: element, rest: list};
}

function nth(list, index) {
    let newList = [];
    let count = 0;
    let number;
    for (let node = list; node; node = node.rest) {
        if (count == index) {
            number = node.value;
            break;
        }
        count++;
        newList.push(node.value);
    }
    return number;
}

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));