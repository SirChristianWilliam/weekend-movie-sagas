import './MovieItem.css';


function MovieItem({movie, onSelect}){
                //import props: movie object and onSelect FN from Movielist
    return (
        <div className="movie-container" key={movie.id} >        
            <h3 className="movie-title">{movie.title}</h3>
            {/* create title and image. Set ALT for image to movie title */}
            <img id={movie.id} onClick={onSelect} src={movie.poster} alt={movie.title}/>
        </div>
    )
}

export default MovieItem;