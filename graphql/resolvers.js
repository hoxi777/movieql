import {_getMovies, _getById, _delteMovie,_addMovie} from "./db";

const resolvers = {
    Query: {
        movies: () => _getMovies(),
        movie: (_,{id}) => _getById(id)
    },
    Mutation: {
        addMovie: (_,{name, score}) => _addMovie(name, score)
    },

}

export default resolvers;