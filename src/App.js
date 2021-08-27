import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar/NavBar';
//import de las vistas
import Home from './views/Home/Home'
import Category from './views/Category/Category'
import Item from './views/Item/Item'

function App() {
  return (
    <Router>
      <NavBar />
      <br/>
      <Switch>
        <Route path="/category/:id" component={Category} />
        <Route path="/item/:id" component={Item} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
