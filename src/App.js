import logo from './logo.svg';
import './App.css';
import UsersContainer from './containers/UsersContainer';
import CategoriesContainer from './containers/CategoriesContainer';

function App() {
  return (
    <div className="App">
    <UsersContainer />
    <CategoriesContainer />
    </div>
  );
}

export default App;
