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
      </Switch>
    </BrowserRouter>
  );
};

export default App;
