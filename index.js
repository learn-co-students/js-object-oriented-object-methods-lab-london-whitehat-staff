function BoardMember(name, homeState, training) {
  this.name = name
  this.homeState = homeState
  this.training = training

  this.veto = returnFunction("No, I must disagree")
  this.approve = returnFunction("You can do that!")
  this.doCharity = returnFunction("I like to help people.")
  this.releasePressStatement = returnFunction("You will see great things from Scuber.")
  this.sayHi = returnFunction(`Hi, my name is ${name}. I am from ${homeState}, and I was trained in ${training}.`)
}

function returnFunction(thing) {
  return function() {
    return thing
  }
}