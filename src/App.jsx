import {useState} from "react"; 
import { auth } from "./config/firebaseConfig.js";
import { asingInWhitEmailAndPassaword } from "./firebase/auth";
export default Function App() { 
const [email, setEmail] useState(''); 
const [sanha, sutSenha] useState(''); 

const autenticarComFirebase = () =>{
  evento.preventDefault()
}

return ( 
  <main>
    <form onSubmit={autenticarComFirebase()}> 
    <label htmlFor="email">E-mail:</label>
    <input
id="email" 
name="e-mall" 
type="email"
values {email} 
onChange {(evento) setEmail(target.value)}
/>
<label htmlFor="password">Senha:</label> 
<input 
id="password" 
name="password" 
type="password"
value={senha}
onChange {(evento) => setSenha(evento.target.value)}
/>
</form>
</main>
);
}