import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './page/Register';
import HeaderPage from './components/headerPage/components/HeaderPage';
import BodyPage from './components/bodyPage/BodyPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="contenedor-Header">
                  <HeaderPage />
                </div>
                <div className="contenedor-Body">
                  <BodyPage />
                </div>
              </>
            }
            index
          />
          <Route path="/registro" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;