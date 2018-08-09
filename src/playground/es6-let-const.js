var nameVar = 'Mary';
var nameVar = 'Mike'; // no error
console.log('nameVar', nameVar)

let nameLet = 'Jen';
nameLet = 'July';
// let nameLet = 'Sam';// errr
console.log('nameLet', nameLet)

const nameConst = 'Frank';
// const nameConst = 'Bob'; not valid
// nameConst = 'Sam' err
console.log('nameConst', nameConst);


function getPetName(){
  var petName = 'Hal'; //not accessible from outside
  // same thing for let and const
  return petName;
}

// Block scoping

var fullName = 'Mary Smith';
if (fullName) {
  var firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);// you can access it with var but not with let or const

