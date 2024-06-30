import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Home from './components/Home';
import Exercises from './components/Exercises';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercises" element={<Exercises />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;