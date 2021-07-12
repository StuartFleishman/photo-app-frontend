import './App.css';
import UsersContainer from './containers/UsersContainer';
import PicturesContainer from './containers/PicturesContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavBar from './components/NavBar'
import Home from './components/Home'
import UserForm from './components/UserForm'
import Login from './components/Login'
import PictureForm from './components/PictureForm'
import TopRated from './components/TopRated';

function App() {
  return (
    <div className="App">
    <Router>
      <NavBar className="navbar navbar-dark bg-info mb-5"/>
    <Switch>
       <Route exact path="/" component={Home} />
       <Route path="/signup" component={UserForm} />
       <Route path="/users" component={(routeInfo) => <UsersContainer routeData={routeInfo} />} />
       <Route path="/pictures/new" component={PictureForm} />
       <Route path="/pictures" component={(routeInfo) => <PicturesContainer routeData={routeInfo} />} />
       <Route path="/login" component={Login} />
       <Route path="/toprated" component={TopRated} />
    </Switch>
    </Router>
    </div>
  );
}

export default App;
