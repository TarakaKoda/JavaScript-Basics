const circle = {
    radius: 1,
    draw: function() {
        console.log(`this is the draw method`);
    }
}

for (let key in circle) {
    console.log(key, circle[key]);
}

for (let key of Object.keys(circle)) {
    console.log(key);
}

for (let entire of Object.entries(circle)) {
    console.log(entire);
}

if (1 in Object.values(circle)) {
    console.log('yes');
}

