import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.jsx';
import Registrar from './registrar.jsx';
import Home from './home.jsx';
import AuthMiddleware from './middleware.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<AuthMiddleware />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<App />} />
        <Route path="/registrar" element={<Registrar />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);


middleware.jsx

import { Link, Navigate, Outlet } from 'react-router-dom';
import { jwtVerify } from 'jose';
import { useEffect, useState } from 'react';

const AuthMiddleware = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem('token');
      const secretKey = new TextEncoder().encode('minhaChaveSecreta');
      const isAuthenticated = await jwtVerify(token, secretKey);
      if (isAuthenticated) {
        setIsAuthenticated(true);
      }
    };
    verifyToken();
  }, []);

  if (isAuthenticated === null) {
    return <Link to="/login">Login</Link>;
  }

  return isAuthenticated === true ? <Outlet /> : <Navigate to="/login" />;
};

export default AuthMiddleware;