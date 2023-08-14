import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
// import { Provider } from 'react-redux';
// import { store } from './store';
import DesktopFrame from './components/templates/DesktopFrame'

function App() {
  return (
        <div>
          <Router>
            <DesktopFrame>
              <Routes />
            </DesktopFrame>
          </Router>
        </div>
  )
}

export default App;
