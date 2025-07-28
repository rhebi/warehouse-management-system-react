import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from './routes/route.jsx'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Route />
      </div>
    </Router>
  );
}

export default App;