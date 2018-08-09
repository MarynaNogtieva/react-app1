class Person {
  constructor(name = 'Anonymous', age = 0) {
   this.name = name;
   this.age = age;
  }

  getGreeting() {
    return `Hi, I am ${this.name}!`;
  }

  getDescription() {
    return `${this.name} is ${this.age} years old`;
  }
}


class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }

  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      description += ` My major is ${this.major}`;
    }
    return description;
  }
}

class Traveller extends Person {
  constructor(name, age,homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  hasLocation() {
    return !!this.homeLocation;
  }

  getGreeting() {
    let  greeting = super.getGreeting();
    if(this.hasLocation()) {
      greeting  += `I am from ${this.homeLocation}`;
    }
    return greeting;
  }
}
const me = new Student('Marina Nogteva', 26, 'Photography');
console.log(me.getDescription());


const other = new Student();
console.log(other.hasMajor());

const traveller = new Traveller('Sam Smith', 32, 'New York City');
console.log(traveller.getGreeting());