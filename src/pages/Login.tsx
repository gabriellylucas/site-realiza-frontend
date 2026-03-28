import { useState } from "react";
import "../Login.css";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [erro, setErro] = useState<string>("");

  function validarEmail(email: string): boolean {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleLogin = async () => {
  setErro("");

  if (!email && !senha) {
  setErro("Preencha todos os campos!");
  return;
}

if (!email) {
  setErro("Digite o email");
  return;
}

if (!validarEmail(email)) {
  setErro("Digite um email válido (ex: nome@email.com)");
  return;
}

if (!email.includes("@")) {
  setErro("O email precisa ter @");
  return;
}

if (!email.includes(".")) {
  setErro("O email precisa ter um domínio (ex: .com)");
  return;
}

if (email.startsWith("@") || email.endsWith("@")) {
  setErro("Formato de email inválido");
  return;
}

if (!senha) {
  setErro("Digite a senha");
  return;
}

if (senha.length < 6) {
  setErro("A senha deve ter pelo menos 6 caracteres");
  return;
}

  try {
    const response = await fetch("http://localhost:3000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        senha: senha, 
      }),
    });

    const data = await response.json();
    console.log(data);

    if (!response.ok) {
      setErro(data.message || "Erro ao fazer login");
      return;
    }

    localStorage.setItem("token", data.token);
    console.log("TOKEN SALVO:", localStorage.getItem("token"));

    window.location.href = "/";


  } catch (error) {
    setErro("Erro ao conectar com o servidor");
  }
};

  return (
  <div className="login-container">
    <div className="login-box">
      <h1>Login</h1>
      <p className="subtitle">Acesse sua conta</p>

      <label>Email</label>
      <input
        type="email"
        placeholder="Digite seu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Senha</label>
      <input
        type="password"
        placeholder="Digite sua senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />

      {erro && <p className="erro">{erro}</p>}

      <button onClick={handleLogin}>
        Entrar
      </button>

      <p className="link">Esqueceu sua senha?</p>
      <p className="link">
        <Link to="/cadastro">Cadastre-se</Link>
      </p>
    </div>

    <p className="footer">
      Tecnologia limpa, sustentável e até <span>10x mais eficiente</span>
    </p>
  </div>
);
}