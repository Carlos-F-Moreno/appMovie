import './App.css';
import { BrowserRouter as Router, Route, Link,Routes } from 'react-router-dom';
import{UserLogin} from './components/users/UserLogin.js'
import { Movies } from './components/movies/Movies';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path="/" element={<Movies />}></Route>
      {/*   <Route path='' element={<Index />}></Route>
        <Route path='' element={<Asd />}></Route>
        <Route path='' element={< AVS/>}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
