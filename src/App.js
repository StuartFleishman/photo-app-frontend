import logo from './logo.svg';
import './App.css';
import UsersContainer from './containers/UsersContainer';
import CategoriesContainer from './containers/CategoriesContainer';
import PicturesContainer from './containers/PicturesContainer';

function App() {
  return (
    <div className="App">
    <UsersContainer />
    <CategoriesContainer />
    <PicturesContainer />
    </div>
  );
}

export default App;
