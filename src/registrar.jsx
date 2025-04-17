import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './config/firebaseConfig';

export default function Registra() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const navigation = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, senha);
      navigation('/login');
    } catch (erro) {
      alert('Erro ao criar usuário');
      console.log(erro);
    }
  };

  return (
    <main>
      <h3>Registrar</h3>
      <form onSubmit={handleRegister}>
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
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
        <button type="submit">Criar Conta</button>
      </form>
    </main>
  )
};