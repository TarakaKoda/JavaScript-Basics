// we know that we can achieve inheritance using classes but,
// in javascript we don't have class instead we have objects

// we have an object called circle and another object called shape 
// now we can move all the common methods to the shape object and somehow we need to link each other

// now we can refer the shape object as the prototype of that circle object
// prototype id essentially a parent to another object

// we object in javaScript has a prototype object except for one ie., (Object)

let x = {};

console.log(x);
// this x has a prototype ObjectBase (Object)
// every object in the javascript has a prototype object
// except for Object were it is the root object for all objects that created.
// this Object does not have any root object or parent object

// ok now let create another object y

let y = {}; 

console.log(y);
// y object is also has the prototype of ObjectBase (Object)

console.log(Object.getPrototypeOf(x) === Object.getPrototypeOf(y));
// this will return true 

// for example we can use the toStings() 
// there is no any method called to string.
// so how we are accessing that 
// as we call a method in the javascript first it will check in the local object if that doesn't find anything 
// then it will check to the prototype of that object
// as we know toSting is a method in the Object so we can access that method into your x object 
// because it is the child object of that prototype
// in some case we can have multiple objects in chain in such case it will search all the objects till root

// a prototype is just a regular object 


