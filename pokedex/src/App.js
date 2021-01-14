import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import PokeListing from './pages/PokeListing';
import Header from './components/Header';

function App() {
  return (
    <>
    <Header />

    <BrowserRouter>
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/about">
          About
        </Route>

        <Route path="/pokemon/:pokemon">
          <PokeListing/>
        </Route>

        <Route>
          Page does not exist.
        </Route>


      </Switch>
    </BrowserRouter>

    </>
  );
}

export default App;

//      pages/     components/

/*     pages/Home.js
<div>
  <Topbar />    <-    components/Topbar.js
  <Pokelist />
<div>
*/


