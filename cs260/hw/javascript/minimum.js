function minimum(num1, num2) {
    if (num1 >= num2) {
        return num2;
    } else {
        return num1;
    }
}

console.log(minimum(0, 10));
console.log(minimum(0, -10));
console.log(minimum(10, 10));