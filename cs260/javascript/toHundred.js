function toHundred() {
  for (let i=0; i <= 100; i++) {
    let fizz = false;
    let buzz = false;
    if ((i % 3) == 0) {
      fizz = true;
    }
    if ((i % 5) == 0 ) {
      buzz = true;
    }

    if (fizz == true && buzz == true) {
      console.log("Fizzbuzz");
    } else if (fizz == true) {
      console.log("Fizz");
    } else if (buzz == true) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

toHundred();