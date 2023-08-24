// let recap
// method -> object 
// function -> global object (window: browser/ global: node)

// this happens because when we use a call back function in a method 
// it will a regular function: which the this keyword will refer to the global object (window)


// method 1:
// in the forEach() we have a second argument that will take/sets the this object
const video1 = {
    title: 'Avengers',
    tags: ['ironMan', 'captainAmerica', 'thor', 'hulk', 'blackWidow', 'hawkeye'],
    showVideo() {
        this.tags.forEach(function(tag) {
            console.log(this.title, tag);
        }, this) 
    }
}

video1.showVideo();

// method 2: 
// setting a variable for this keyword to use that in a call back function
const video2 = {
    title: 'JusticeLeague',
    tags: ['BatMan', 'SuperMan', 'WonderWomen', 'Flash', 'AquaMan'],
    showVideo() {
        const self = this;
        this.tags.forEach(function(tag) {
            console.log(self.title, tag);
        })
    }
}

video2.showVideo(); // this is also not the best approach there is a better way to solve this lets see that

// method: 3 (using the bind method)

// how these (call, apply, bind) methods works
function play(a,b) {
    console.log(this)
}
play.call({name: 'taraka'}, 1, 2); // if we have any additional arguments we can pass then like 1, 2
play.apply({name: 'koda'}, [1,2]) // is there exists any argument we can pass it in an array
const fn = play.bind({name: 'srinu'}) // this will returns a new function that always points to this object
fn();

// so by using the bind method we can solve this problem
const video3 = {
    title: 'Cartoons', 
    tags: ['Ben10', 'Mr.Bean', 'Shingchan', 'Tom&Jerry'],
    showVideo() {
        this.tags.forEach(function(tag) {
            console.log(this.title, tag);
        }.bind(this));
    }
}

video3.showVideo();

// method :4 (Best way to do it)
// using the arrow function
const video4 = {
    title: 'AnimeVerse',
    tags: ['Goku', 'Naruto', 'Luffy', 'Ichigo', 'ErenYeager'],
    showVideo() {
        this.tags.forEach(tag => console.log(this.title, tag));
    }
}

video4.showVideo();