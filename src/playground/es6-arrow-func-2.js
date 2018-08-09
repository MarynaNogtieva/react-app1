// arguments object - no longer bound with arrow func
// this keyword - no longer bound with arrow func

const add = function (a, b) {
  console.log(arguments);
  return a + b;
};

console.log(add(4, 6, 99));

const add2 = (a, b) => {
  // console.log(arguments); this will be errorred
  return a + b;
};

console.log(add2(3,5));


const user = {
  name: 'Bob',
  cities: ['New York', 'Toronto'],
  // printPlacesLived: function () {
  printPlacesLived() {
    console.log(this.cities);

    this.cities.forEach(function(city) {
      // console.log(this.name + ' lived in ' +city); //not bound this.name
    });

    this.cities.forEach((city) => {
      console.log(this.name + ' lived in ' +city); //access this from the parent when it was defined;
    });

    const cityMessages = this.cities.map((city) => {
      return city + '!';s
    });

    return cityMessages
  }
};

console.log(user.printPlacesLived());

const multiplier = {
  numbers: [2,4,5,6],
  multiplyBy: 4,
  multiply() {
    return this.numbers.map((num) => num * this.multiplyBy);
  }
}

console.log(multiplier.multiply());