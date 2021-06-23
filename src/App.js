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
import Home from './components/Home'
import UserForm from './components/UserForm'
import Login from './components/Login'
import PictureForm from './components/PictureForm'

function App() {
  return (
    <div className="App">
    <Router>
      <NavBar />
    <Switch>
       <Route exact path="/" component={Home} />
       <Route path="/signup" component={UserForm} />
       <Route path="/users" component={UsersContainer} />
       <Route path="/pictures/new" component={PictureForm} />
       <Route path="/pictures" component={PicturesContainer} />
       <Route path="/login" component={Login} />
    </Switch>
    </Router>
    </div>
  );
}

export default App;
