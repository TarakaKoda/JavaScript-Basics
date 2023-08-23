const movies = [
    { title: 'a', year: 2018, rating: 4.5 },
    { title: 'b', year: 2018, rating: 4.7 },
    { title: 'c', year: 2018, rating: 3 },
    { title: 'd', year: 2017, rating: 4.5 }
];

// all the movies in 2018 with rating > 4
// sort them by their rating
// descending order
// pick their title

function filterMovies(array) {
    return array.filter(value => value.year === 2018 && value.rating > 4)
    .sort((movie1, movie2) => {
        if (movie1.rating < movie2.rating) return 1;
        if (movie1.rating > movie2.rating) return -1;
        return 0;
    })
    .map(value => value.title);
    
}

console.log(filterMovies(movies));


