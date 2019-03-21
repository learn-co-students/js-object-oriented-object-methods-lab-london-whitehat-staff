function BoardMember(name, homeState, training) {
    this.name=  name
    this.homeState = homeState
    this.training = training
    this.veto = function() {return 'No, I must disagree'}
    this.approve = function() {return 'You can do that!'}
    this.doCharity = function() {return "I like to help people."}
    this.releasePressStatement = function() {return `You will see great things from Scuber.`}
    this.sayHi = function() {return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`}
}

// # Object Methods in JS Lab

// ## Objectives
// + Create constructor functions
// + Add methods to a constructor function
// + Create objects from a constructor function

// ## Instructions
// Scuber, in an effort to gain much needed local influence, has begun adding some powerful board members to its organization.  It expects to add more (similar) board members in the future, so it needs you to declare a constructor function so that it can crank them out.

// In `index.js`, write a constructor function called `BoardMember` that sets the following properties: `name`, `homeState`, and `training`.

// Add following methods to the class:
// + `veto` — returns `No, I must disagree`

// + `approve` — returns `You can do that!`

// + `doCharity` — returns `I like to help people.`

// + `releasePressStatement` — returns `You will see great things from Scuber.`

// + `sayHi` — returns `"Hi, my name is <name>. I am from <homestate>, and I was trained in <training>.`

// <p class='util--hide'>View <a href='https://learn.co/lessons/js-object-methods-lab'>Object Methods Lab</a> on Learn.co and start learning to code for free.</p>
