function greetings(time) {
    if (time >=6 && time <= 12) {
        console.log('Good morning');
    }
    else if (time > 12 && time <=18) {
        console.log('Good Evening');
    }
    else if (time > 18 && time <24) {
        console.log('Good Night');
    }
}

let result = greetings(19);
// we can also remove these {} because if the condition it has only a single statement