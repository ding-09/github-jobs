import React, { useState } from 'react';
import GlobalStyle from './styles/GlobalStyle';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import Header from './components/Header';

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
    </BrowserRouter>
  );
};

export default App;
