import React from 'react';
// import Global Style from styled-components
import GlobalStyle from './components/GlobalStyle';
// import Pages
import AboutUs from './pages/AboutUs';
import Nav from './components/Nav';

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AboutUs />
    </div>
  );
};

export default App;
