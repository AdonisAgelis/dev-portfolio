import React from 'react';

import { Switch, Route } from 'react-router-dom';
// import Global Style from styled-components
import GlobalStyle from './components/GlobalStyle';
// import Pages
import AboutUs from './pages/AboutUs';
import Nav from './components/Nav';
import OurWork from './pages/OurWork';
import ContactUs from './pages/ContactUs';
import MovieDetail from './pages/movieDetail';

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
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
    </div>
  );
};

export default App;
