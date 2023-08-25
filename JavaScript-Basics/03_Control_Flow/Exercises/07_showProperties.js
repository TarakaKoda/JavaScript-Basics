const movie = {
    title: 'Avengers Endgame',
    releaseYear: 2019,
    directors: 'Russo Brothers',
    rating: 4.5
};

function showProperties(obj) {
    if (typeof(obj) === 'object') {
        for (let key in obj) {
            if (typeof(obj[key]) === 'string') {
                console.log(key, obj[key]);
            }
        }
    }
}

showProperties(movie);