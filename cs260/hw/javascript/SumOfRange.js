function toRange(num1, num2, num3 = 1) {
    let numbers = [];
    if (num1 >= num2) {
        num3 = -1;
        for (let i=num1; i >= num2;) {
            numbers.push(i);
            i += num3;
        }
    } else {
        for (let i=num1; i <= num2;) {
            numbers.push(i);
            i += num3;
        }
    }
    return numbers;
}

function toSum(numbers) {
    let sum = 0;
    for (let i=0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

console.log(toRange(1, 10));
console.log(toSum(toRange(1, 10)));
console.log(toSum(toRange(5, 2, -1))); 