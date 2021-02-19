import './scss/main.scss';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { CartProvider } from './context/cartContext'

import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';

function App() {
  return (
    <CartProvider>

      <BrowserRouter>
        <NavBar />
        
        <Switch>
            <Route exact path="/">
              <ItemListContainer greeting={'Menu'}/>
            </Route>
            <Route path="/item/:id" component={ItemDetailContainer}/>
            <Route path="/cart"/>
            <Route path="*">
              <Redirect to='/'/>
            </Route>
        </Switch>
      </BrowserRouter>

    </CartProvider>
  );
}

export default App;
