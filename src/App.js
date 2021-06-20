import logo from './logo.svg';
import './App.css';
import UsersContainer from './containers/UsersContainer';
import CategoriesContainer from './containers/CategoriesContainer';
import PicturesContainer from './containers/PicturesContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
    <Router>
      <NavBar />
      <UsersContainer />
      <CategoriesContainer />
      <PicturesContainer />
    </Router>
    </div>
  );
}

export default App;
