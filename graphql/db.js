let movies = [
    {
        id: 0,
        name: "Star Wars",
        score: 1
    },
    {
        id: 1,
        name: "Avengers - The new one",
        score: 8
    },
    {
        id: 2,
        name: "The Godfater I",
        score: 9
    },
    {
        id: 3,
        name: "Logan",
        score: 2
    }
];

export const _getMovies = () => movies; //return movies배열

export const _getById = id => {
    fiteredMovies = movies.filter(movie => movie.id === id);
    return fiteredMovies[0];
};

export const _delteMovie = (id) => {
    const cleanMovies =  movies.filter(movie => movie.id !== id);
    if(movies.length > cleanMovies.length) {
        movies = cleanMovies;
        return true;
    } else {
        return false;
    }
}; 

export const _addMovie = (name, score) => {
    const newMovie = {
        id: `${movies.length}`,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
}

