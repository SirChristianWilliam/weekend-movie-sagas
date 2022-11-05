import './MovieItem.css';


function MovieItem({movie, onSelect}){

    return (
        <div className="movie-container" key={movie.id} >        
            <h3 className="movie-title">{movie.title}</h3>
            <img id={movie.id} onClick={onSelect} src={movie.poster} alt={movie.title}/>
        </div>
    )
}

export default MovieItem;