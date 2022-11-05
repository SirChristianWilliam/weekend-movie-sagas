import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router-dom';
import MovieItem from '../MovieItem/MovieItem';


function MovieList() {
    //import useHistory
    const history = useHistory();

    //use dispatc and useselcotor for store of movies post dispatch below
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    //on click
    const onSelect = (evt)=>{
        console.log('evt.target.id', evt.target.id);

        

        //go to details and send id with
        history.push(`/api/movie/${evt.target.id}`);

    }

    return (
        <main>
            <h1 className="movie-list">MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (

                        <MovieItem movie={movie} onSelect={onSelect}/>

                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;