import React from 'react';
// import Global Style from styled-components
import GlobalStyle from './components/GlobalStyle';
// import Pages
import AboutUs from './pages/AboutUs';

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <AboutUs />
    </div>
  );
};

export default App;
