import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router-dom';

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
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3 >{movie.title}</h3>
                            <img id={movie.id} onClick={onSelect} src={movie.poster} alt={movie.title}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;