// let see, if we have an class called Circle
// and it has a method called computeOptimumLocation()

// now we create another class called square
// this class also has the same method and same method with same functionality

// this is repeating the same code two time, now here its not a big deal but
// if we have n number of methods with same name and same functionality then there will be a lot of memory waste

// to avoid this situation we need move this method to another class Shape and the two classes can inheritable from that method
// is in future if we want to modify or move that method we can do that in a single position.

 // so we can see we have two class with the same method
 // instead of declaring them both different times we can do
 // create a new class and create that method in that class 
 // now we can make these two classes inherit that class

 // by convention we call these classes like this

 // Shape (Base/Super/Parent)
 // circle, square (Derived/Sub/Child)

 // this is how inheritance will work
 // we call this relationship like IS-A 
 // so we say circle is a shape

 // this is the global concept of inheritance called classical inheritance but in javascript we don't have class we have objects
 // thats where prototypical inheritance comes in play
 // so basically we have two type of inheritance classical and prototypical
 // what is prototypical inheritance?
 // lets see that next...


   