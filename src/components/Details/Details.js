import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Details(){
    //import useParams and dispatch
    const dispatch = useDispatch();
    const params = useParams();
    
    //useHistory setup
    const history=useHistory();

    //get active movie from redux
    const activeMovie = useSelector(store => store.activeMovie);

    //get movies genres from redux
    const movieGenres = useSelector(store => store.genres);
    // const genres = useSelector(store => store.genres);
    // console.log('params.id', params.id);
    useEffect(()=>{
        //send id to saga
        dispatch({
            type: 'FETCH_SINGLE_MOVIE',
            payload: params.id
        });

        dispatch({
            type: 'FETCH_MOVIE_GENRES',
            payload: params.id,
        });
    }, [params.id]);

    // return loading 
    if (!activeMovie.id){
        console.log('activeMovie', activeMovie)
        return <h1>loading...</h1>
    }

    const goHome = () => {
        console.log('in goHome fn');

        //empty redux store
        // dispatch({
        //     type: 'EMPTY_STORE',
        // });

        //go home
        history.push('/');
    };

    return(
        <article key={activeMovie.id} className="movieDetailContainer">
            <h1> {activeMovie.title} </h1>
            <img src={activeMovie.poster}></img>
            <p>{activeMovie.description}</p>
            <ul>
                {movieGenres && movieGenres.map((genre, i) => {
                    return <li key={i}>{genre.name}</li>
                })}
            </ul>

            <button onClick={goHome} class="backBtn">Home</button>

        </article>
    )
};


export default Details;