function mixins(target, ...source) {
    Object.assign(target, ...source);
}

const canEat = {
    eat() {
        console.log('eating');
    }
}

const canWalk = {
    walk() {
        console.log('walking');
    }
}

const canSwim = {
    swim() {
        console.log('swimming');
    }
}

function Person() {

}

function Cat() {

}


function GoldFish() {

}

mixins(Person.prototype , canEat, canWalk);
mixins(Cat.prototype, canEat, canWalk);
mixins(GoldFish.prototype, canEat, canSwim);

const p = new Person();
const c = new Cat();
const gf = new GoldFish();
