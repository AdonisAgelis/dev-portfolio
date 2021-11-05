import React from 'react';

import { Switch, Route, useLocation } from 'react-router-dom';
// import Global Style from styled-components
import GlobalStyle from './components/GlobalStyle';
// import Pages
import AboutUs from './pages/AboutUs';
import Nav from './components/Nav';
import OurWork from './pages/OurWork';
import ContactUs from './pages/ContactUs';
import MovieDetail from './pages/movieDetail';
// Animation
import { AnimatePresence } from 'framer-motion';

const App = () => {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/work" exact>
            <OurWork />
          </Route>
          <Route path="/work/:id">
            <MovieDetail />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
};

export default App;
