import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './config/firebaseConfig.js';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { SignJWT } from 'jose';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const autenticarComFirebase = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);

      const secretKey = new TextEncoder().encode('minhaChaveSecreta');
      const token = await new SignJWT({ user: email })
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('1h')
        .sign(secretKey);

      localStorage.setItem('token', token);
      navigate('/');
      alert('Login realizado com sucesso!');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Login-se</h2>
      <form onSubmit={autenticarComFirebase}>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Entrar</button>
      </form>
      {error && <p>{error}</p>}
      <br />
      <br />
      <Link to="/registrar">Não tenho conta!</Link>
    </div>
  );
}