import React, { useState } from 'react';
import GlobalStyle from './styles/GlobalStyle';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Details from './pages/Details';

const App = () => {
  const [currentMode, setCurrentMode] = useState('light');
  const changeMode = (toggleStatus) => {
    let theme = toggleStatus ? 'dark' : 'light';
    setCurrentMode(theme);
  };
  return (
    <Router>
      <GlobalStyle mode={currentMode} />
      <Header changeMode={changeMode} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/details/:id" component={Details} />
      </Switch>
    </Router>
  );
};

export default App;
