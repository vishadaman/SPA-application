import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import List from './components/List';
import {useFavorites } from './contexts/FavoritesContext';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  const { favorites } = useFavorites();
  return (
    
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard favorites={favorites} />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </Router>
  );
};

export default App;
