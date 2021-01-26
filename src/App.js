import React, { useState } from 'react';
import GlobalStyle from './styles/GlobalStyle';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Details from './pages/Details';

const App = () => {
  const [currentMode, setCurrentMode] = useState('light');
  const changeMode = (toggleStatus) => {
    let theme = toggleStatus ? 'dark' : 'light';
    setCurrentMode(theme);
  }
  return (
    <BrowserRouter>
      <GlobalStyle mode={currentMode}/>
      <Header changeMode={changeMode}/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/details">
          <Details />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
