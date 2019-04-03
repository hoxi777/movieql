import { getMovies, getMovie, getSuggestions, getHousePrices } from "./db";

const resolvers = {
    Query: {
        movies: (_, {limit, rating}) => getMovies(limit, rating),
        movie: (_, {limit, rating}) => getMovie(id),
        suggestion: (_, {limit, rating}) => getSuggestion(id)

    }

};

export default resolvers;