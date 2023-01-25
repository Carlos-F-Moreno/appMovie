import './App.css';
import { BrowserRouter as Router, Route, /* Link, */ Routes } from 'react-router-dom';
/* import { UserLogin } from './components/users/UserLogin.js' */
import {UpdateMovie} from './components/movies/UpdateMovie'
import { Movies } from './components/movies/Movies';
import {AddMovie} from './components/movies/AddMovies';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Movies />}></Route>
          <Route path='/movie/:movieId' element={<UpdateMovie />}></Route>
          
        <Route path='' element={<AddMovie />}></Route> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
