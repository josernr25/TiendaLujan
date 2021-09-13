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
import Cart from './views/Cart/Cart'
// Import Provider
import { CartProvider } from './CartContext'
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/category/:id" component={Category} />
          <Route path="/item/:id" component={Item} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer/>
      </Router>
    </CartProvider>
  );
}

export default App;
