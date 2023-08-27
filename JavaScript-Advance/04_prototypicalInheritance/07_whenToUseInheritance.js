// when to use inheritance 
// inheritance is not the only technique to make the code reusable
// there is another technique called Composition

// sometimes inheritance can break the structure of the code
// for example 

function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Animals() {

}

Animals.prototype.canEat = function() {
    console.log('eating');
}

Animals.prototype.canWalk = function() {
    console.log('walking');
}

// lets create two new objects and make them as a base objects to this super object

function Person() {

}

extend(Person, Animals);

function Cat() {

}

extend(Cat, Animals);

const p = new Person();
const c = new Cat();

// now what if we introduce another animal called fish

// but we know that fish can't walk it swims
// now our implementation will no work we need to change the structure of this code
// and add two new objects called Mammals and Fish

// now make the eat() at the animals => all animals can eat
// and move the walking() to the mammals and create a new method called swim() in Fish object constructor
// now make person and cat to inherit the mammals object and make goldfish to inherit the Fish()

// see as the animals are increasing the code is also increasing
// this make the code more complicated

// the take is that try to avoid to use inheritance concept as much as possible
// or if its necessary then kept it under level 2 inheritance 

// we have another better technique called composition
// favor composition over inheritance.

// in javascript we use mixins to achieve composition


