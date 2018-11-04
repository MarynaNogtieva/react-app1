import React from 'react';
import ReactDOM from 'react-dom';

import IndecisionApp from './components/IndecisionApp.js'



// stateless functional component




ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

class OldSyntax {
  constructor() {
    this.name = 'Mary';
    this.getGreeting = this.getGreeting.bind(this)
  }

  getGreeting() {
    return `Hi. My name is ${this.name}`
  }
}

const oldSyntac = new OldSyntax();
console.log(oldSyntac.getGreeting());
const getGreeting = oldSyntac.getGreeting;
console.log(getGreeting()); //error Cannot read property 'name' of undefined

// to fix we have to use bind in constructor or const getGreeting = oldSyntac.getGreeting.bind(oldSyntc);
class NewSynax {
  name = 'Jen';

  getGreeing = () => {
    return `Hi. My name is ${this.name}`
  }
}

const newSyntax = new NewSynax();
console.log(newSyntax);

const newGetGreeting = newSyntax.getGreeing;

// this works
console.log(newGetGreeting());