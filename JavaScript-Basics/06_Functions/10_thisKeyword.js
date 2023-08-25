 // this keyword 
 // the object that is executing the current function

 // if a function is in a object we called it as a method
 // this will reference the object itself
 // method -> obj

 // if that function is not a part of an object then it is a regular function
 // then this will refer to the global object 
 // function -> global object (window/ global)
 // window for browser and global for node

// as paly() is declared inside of an object (video),
// 'this' keyword will points to the video object.
const video = {
    title: 'Autobots', 
    play() {
        console.log(this);
    }
};
video.play();

// even if we add another method into a object we get the same result 
// this will refer to the video object

video.show = function(){
    console.log(this);
} 
video.show(); // we will get the video object

// what if its a constructor function
function ViewVideo(name) {
    this.name = name;
    console.log(this);
} 

const newView = new ViewVideo('srinu');
// this will create new object for the constructor function


// this functions is a regular function so 'this' will points to the global object (window)
function newVideo() {
    console.log(this);
}
newVideo();

// let see another confusing example

const person = {
    name: 'taraka', 
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.name, tag);
        }, this)
    }
}

person.showTags()

// this keyword in the callback function is not referencing the person object
// to solve this we have few methods:  
// 1. forEach() has a second argument in this argument we can pass the this keyword
//    note: not every call back function has this second argument. (so we need to avoid this method)
// 2. declaring a self variable and set this (thus this is not the best approach)
// 3. using the array function (best of all approaches)   
