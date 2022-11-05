import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import Details from '../Details/Details';

function App() {
  return (
    <div className="App">
      <h1 className="header">The Movies Saga!</h1>
      <Router>        
        {/* home */}
        <Route path="/" exact>
          <MovieList />
        </Route>
        {/* path to details page including id for params to be pulled for requests */}
        <Route path="/api/movie/:id">
          <Details />
        </Route>
        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;
