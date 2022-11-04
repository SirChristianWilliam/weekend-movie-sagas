import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';


function Details(){
    //import useParams and dispatch
    const dispatch = useDispatch();
    const params = useParams();
    
    //get active movie from redux
    const activeMovie = useSelector(store => store.activeMovie);

    console.log('params.id', params.id);
    useEffect(()=>{
        //send id to saga
        dispatch({
            type: 'FETCH_SINGLE_MOVIE',
            payload: params.id
        });
    }, []);

    //return loading 
    if (!activeMovie.id){
        return <h1>loading...</h1>
    }
    // else {
    //     return <h1>{activeMovie.title}</h1>
    // }

     return(
        <article key={activeMovie.id} className="movieDetailContainer">
            <h1> {activeMovie.title} </h1>
            <img src={activeMovie.poster}></img>
            <p>{activeMovie.description}</p>
            <ul>
                <li>Space Movie</li>
                <li>Action</li>
            </ul>

        </article>
     )
};


export default Details;