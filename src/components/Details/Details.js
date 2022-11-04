import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';


function Details(){
    //import useParams and dispatch
    const dispatch = useDispatch();
    const params = useParams();
    
    console.log('params.id', params.id);
    useEffect(()=>{
        //send id to saga
        dispatch({
            type: 'FETCH_SINGLE_MOVIE',
            payload: params.id
        });
    }, []);


     return(
        <article className="movieDetailContainer">
            <h1> MOVIE TITLE </h1>
            <img src="https://s.yimg.com/uu/api/res/1.2/0GBXd289dMqVEPaqTl4x5w--~B/aD0xNTAwO3c9MTAzNTthcHBpZD15dGFjaHlvbg--/http://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d05a3f087fa57f6d41b865d53a42a5f5"></img>
            <p>MOVIE DESCRIPTION</p>
            <ul>
                <li>Space Movie</li>
                <li>Action</li>
            </ul>

        </article>
     )
};


export default Details;