import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import styled from "styled-components";
import GlobalStyles from "../src/components/GlobalStyles";
import Header from "./components/Header";
import Home from "./pages/Home";
import PokeListing from "./pages/PokeListing";
import About from "./pages/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Wrapper>
          <Header />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/about">
              <About />
            </Route>

            <Route path="/pokemon/:pokemon">
              <PokeListing />
            </Route>

            <Route>Page does not exist.</Route>
          </Switch>
        </Wrapper>

        <GlobalStyles />
      </BrowserRouter>
    </>
  );
}

export default App;

const Wrapper = styled.div`
  max-width: 900px;
  margin: auto;
`;

//      pages/     components/

/*     pages/Home.js
<div>
  <Topbar />    <-    components/Topbar.js
  <Pokelist />
<div>
*/
